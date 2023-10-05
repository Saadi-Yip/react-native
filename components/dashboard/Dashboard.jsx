'use client'
import { useSession, signOut } from 'next-auth/react'
import Layout from '../global/Layout';
function Dashboard( ) { 
    const {data: session} = useSession();
    if (session) {
        return (
            <Layout>
                <h1>{session?.user?.name}</h1>
                <button onClick = {() =>signOut()}>logout</button>
            </Layout>
        )
    } 

}

 
export default Dashboard;