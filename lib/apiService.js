import axios from "axios";

const API_URL = "https://saadi-dashboard.cyclic.app";

// Helper function to handle API requests 
const sendRequest = async (method, url, data = null) => {
  try {
    const response = await axios({
      method,
      url: `${API_URL}/${url}`,
      data,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(`Request failed with status ${error.response.status}`);
    } else if (error.request) {
      throw new Error("No response received from server");
    } else {
      throw new Error("Error setting up the request");
    }
  }
};

// Employee related functions
export const getEmployees = async () => {
  return sendRequest("get", "employees");
};

export const deleteEmployee = async (employeeId) => {
  return sendRequest("delete", `employees/${employeeId}`);
};

export const updateEmployee = async (employeeId, data) => {
  return sendRequest("patch", `employees/${employeeId}`, data);
};

// Roles related functions
export const getRoles = async () => {
  return sendRequest("get", "roles");
};
