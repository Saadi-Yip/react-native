// pages/dashboard.js
import { requireAuth } from '@/utils/requireAuth';
import { signOut } from 'next-auth/react'
function DashboardPage({ session }) {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome, {session?.user?.name}!</p>
            <button onClick={() => signOut()}>Logout</button>
        </div>
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
