// pages/dashboard.js
import { requireAuth } from '@/utils/requireAuth';
import { signOut } from 'next-auth/react'
import Layout from './../components/layout/Layout';
function DashboardPage({ session }) {
    return (
        <Layout>
            <h1>Dashboard</h1>
            <p>Welcome, {session?.user?.email}!</p>
            <button onClick={() => signOut()}>Logout</button>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    return requireAuth(context, ({ session }) => {
        return {
            props: { session }
        };
    });
}

export default DashboardPage;
