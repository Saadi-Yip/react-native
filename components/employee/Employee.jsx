import React, { useEffect, useState } from "react";
import Layout from "../global/Layout";
import { deleteEmployee, getEmployees, getRoles, updateEmployee } from "@/lib/apiService";
import { BsTrash } from "react-icons/bs";

const Employee = ({ session }) => {
  const [employees, setEmployees] = useState([]);
  const [filter, setFilter] = useState("");
  const [filterField, setFilterField] = useState("name");
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isAdmin = session?.user?.role === "admin";

  useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);

      // Use Promise.all to fetch data from both APIs concurrently
      const [employeeData, rolesData] = await Promise.all([getEmployees(), getRoles()]);

      setEmployees(employeeData?.data);
      setRoles(rolesData?.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  fetchData();
}, []);

  // Handle attribute changes for employees
  const handleAttributeChange = async (employeeId, newValue, attribute) => {
    try {
      setEmployees((prevEmployees) =>
        prevEmployees.map((employee) =>
          employee._id === employeeId
            ? { ...employee, [attribute]: newValue }
            : employee
        )
      );

      const query = { [attribute]: newValue };
      await updateEmployee(employeeId, query);
    } catch (error) {
      console.error(`Error updating ${attribute}:`, error);
    }
  };

  // Handle employee deletion
  const handleDelete = async (employeeId) => {
    try {
      setEmployees((prevEmployees) =>
        prevEmployees.filter((employee) => employee._id !== employeeId)
      );

      await deleteEmployee(employeeId);
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  // Filter the employees based on the selected criteria
  const filteredEmployees = employees
    ? employees.filter((employee) => {
        if (filter === "") return true;
        const fields = filterField.split(".");
        let value = employee;
        for (const field of fields) {
          value = value[field];
          if (!value) {
            return false;
          }
        }
        return value.toLowerCase().includes(filter.toLowerCase());
      })
    : [];

  return (
    <Layout>
      <div className="p-6 bg-gray-800 rounded-md shadow-lg min-h-full">
        <h1 className="text-3xl font-bold text-gray-300 text-center mb-6">
          Employee List
        </h1>
        <div className="mb-6 flex justify-center items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="p-3 bg-gray-400 text-gray-800 placeholder-gray-900 rounded-lg w-72 focus:outline-none"
            />
            <span className="absolute right-3 top-2 text-gray-500">
              <i className="fas fa-search"></i>
            </span>
          </div>
          <select
            value={filterField}
            onChange={(e) => setFilterField(e.target.value)}
            className="p-3 bg-gray-600 text-gray-300 rounded focus:outline-none"
          >
            <option value="name">Name</option>
            <option value="role.name">Role</option>
            <option value="email">Email</option>
            <option value="designation">Designation</option>
            <option value="department">Department</option>
            <option value="status">Status</option>
          </select>
        </div>
        {loading ? (
          <div className="text-gray-300 text-center">Loading...</div>
        ) : error ? (
          <div className="text-red-500 text-center">Error: {error.message}</div>
        ) : (
          <div className="overflow-x-auto">
          <table className="table text-gray-300 border-separate space-y-6 text-sm w-full">
            <thead className="bg-gray-700 text-gray-300 text-lg">
              <tr>
                <th className="p-3">User Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Image</th>
                <th className="p-3">Department</th>
                <th className="p-3">Designation</th>
                <th className="p-3">Role</th>
                <th className="p-3">Status</th>
                {isAdmin && <th className="p-3">Actions</th>}
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee) => (
                <tr
                  key={employee._id}
                  className={`text-center ${
                    employee.status === "Inactive"
                      ? "bg-gray-400"
                      : "bg-gray-700"
                  }`}
                >
                  <td className="px-6 py-4">{employee.name}</td>
                  <td className="px-6 py-4">{employee.email}</td>
                  <td className="px-6 py-4">
                    <img
                      src={employee.image}
                      alt={employee.name}
                      className="w-12 h-12 rounded-full"
                    />
                  </td>
                  <td className="px-6 py-4">{employee.department}</td>
                  <td className="px-6 py-4">{employee.designation}</td>
                  <td className="px-6 py-4">
                    {isAdmin ? (
                      <select
                        value={employee.role}
                        onChange={(e) =>
                          handleAttributeChange(
                            employee._id,
                            e.target.value,
                            "role"
                          )
                        }
                        className="w-20 px-2 py-1 rounded bg-gray-800 text-gray-300"
                      >
                        {roles.map((role) => (
                          <option key={role._id} value={role._id}>
                            {role.name}
                          </option>
                        ))}
                      </select>
                    ) : (
                      employee?.role?.name
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {isAdmin ? (
                      <select
                        value={employee.status}
                        onChange={(e) =>
                          handleAttributeChange(
                            employee._id,
                            e.target.value,
                            "status"
                          )
                        }
                        className="w-20 px-2 py-1 rounded bg-gray-800 text-gray-300"
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Disabled</option>
                      </select>
                    ) : (
                      employee.status
                    )}
                  </td>
                  {isAdmin && (
                    <td className="px-6 py-4">
                      <div
                        onClick={() => handleDelete(employee._id)}
                        className="text-center hover:text-red-900 hover:bg-gray-300 flex justify-center bg-gray-800 rounded-full p-3 cursor-pointer transition ease-in-out delay-150"
                      >
                        <BsTrash size={22}  />
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        )}
      </div>
    </Layout>
  );
};

export default Employee;
