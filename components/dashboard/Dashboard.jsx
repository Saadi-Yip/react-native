import {
  attendanceData,
  clientSatisfactionData,
  departmentSalaryData,
  employeePerformanceData,
  icons,
  projects,
  revenueData,
} from "@/data/Charts";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AttendanceChart from "../charts/AttendenceChart";
import PerformanceChart from "../charts/PerformanceChart";
import RevenueChart from "../charts/RevenueChart";
import SalaryChart from "../charts/SalaryChart";
import ClientSatisfaction from "../charts/SatisfactionChart";
import ProjectTable from "../project/ProjectTable";

function Dashboard() {
  const router = useRouter();
  const { data: session, status } = useSession();
  console.log(status);
  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/login");
    }
  }, [session, router]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {icons.map((item, index) => (
          <Link href={item.link} key={index}>
            <div className="px-0 py-6 bg-white shadow-lg rounded-lg flex justify-around items-center hover:bg-gray-100 transition duration-300 transform hover:scale-105">
              {item.icon}
              <div className="flex flex-col items-center">
                <div className="mt-2 text-right text-xl font-extrabold">
                  {item.total}
                </div>
                <span className="text-sm">{item.label}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex flex-row w-full gap-4">
        <div
          className="max-w-1/2 p-4 rounded-lg shadow-lg  bg-white mt-4 w-1/2 cursor-pointer
                    hover:bg-gray-100 transition duration-300 transform hover:scale-105"
        >
          <SalaryChart data={departmentSalaryData} />
        </div>
        <div
          className="max-w-1/2 p-4 rounded-lg shadow-lg  bg-white mt-4 w-1/2 cursor-pointer
                    hover:bg-gray-100 transition duration-300 transform hover:scale-105 max-h-[40] h-[40]"
        >
          <RevenueChart data={revenueData} />
        </div>
      </div>
      <div className="flex flex-row w-full gap-4">
        <div className="max-w-1/2 p-4 rounded-lg shadow-lg bg-white mt-4 w-1/3 cursor-pointer hover:bg-gray-100 transition duration-300 transform hover:scale-105">
          <AttendanceChart data={attendanceData} />
        </div>
        <div className="max-w-1/2 p-4 rounded-lg shadow-lg bg-white mt-4 w-1/2 cursor-pointer hover:bg-gray-100 transition duration-300 transform hover:scale-105">
          <ClientSatisfaction data={clientSatisfactionData} />
        </div>
        <div className="max-w-1/2 p-4 rounded-lg shadow-lg bg-white mt-4 w-1/2 cursor-pointer hover-bg-gray-100 transition duration-300 transform hover:scale-105">
          <PerformanceChart data={employeePerformanceData} />
        </div>
      </div>
      <div className="mt-4">
        <ProjectTable projects={projects} />
      </div>
    </>
  );
}

export default Dashboard;
