'use client'
import { useSession } from 'next-auth/react'
import EditProfile from '../../components/auth/EditProfile'; 
const UpdateProfile = () => {
    const { data: session } = useSession();
    
        return (
            <><EditProfile user={session?.user} /></>
        )
     
}

export default UpdateProfile