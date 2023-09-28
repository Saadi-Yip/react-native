import { useState } from "react";
import { PiEyeClosedBold } from 'react-icons/pi';
import { BsFillEyeFill } from 'react-icons/bs';
import { FaUser } from "react-icons/fa";

function LoginForm({ onLogin, isLoading }) {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        onLogin(formData);
    };

    return (
        <form onSubmit={handleLogin} className="relative max-w-sm mx-auto">
            
            <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Username
                </label>
                <input
                    type="text"
                    id="username"
                    name="email"
                    className="mt-1 p-2 w-full border rounded-md"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        className="mt-1 p-2 w-full border rounded-md"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <button
                        type="button"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <PiEyeClosedBold /> : <BsFillEyeFill />}
                    </button>
                </div>
            </div>
            <button
                type="submit"
                className="w-full p-2 mt-4 rounded-md bg-blue-500 hover:bg-blue-600 text-white"
            >
                {isLoading ? 'Loading...' : 'Login'}
            </button>
        </form>
    );
}

export default LoginForm;
