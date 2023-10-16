'use client'
import Employee from "@/components/employee/Employee"; 
import { useSession } from "next-auth/react";

const page = () => {
  const {data: session} = useSession(); 
  return (
    <div>
      <Employee session = {session}/>
    </div>
  );
};



export default page;
