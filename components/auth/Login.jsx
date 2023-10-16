'use client'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { FaFacebook, FaGithub, FaGoogle, FaSignInAlt } from 'react-icons/fa';
const Login = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { data: session, status } = useSession();
    if (status === 'authenticated') {
        router.push('/')
    }

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({ email: '', password: '', general: '' });  


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
    
        setLoading(true);
    
        const { email, password } = formData;
        if (!email) {
            setErrors({ ...errors, email: 'Email is required' });
            setLoading(false);
            return;
        }
    
        if (!password) {
            setErrors({ ...errors, password: 'Password is required' });
            setLoading(false);
            return;
        }
    
        try {
            const result = await signIn('credentials', {
                email,
                password,
                redirect: false,
            });
    
            if (result.error) {
                console.error(result.error);
                setErrors({ ...errors, general: result.error });
            } else {
                router.push('/');
            }
        } catch (error) {
            
            console.error(error);
        } finally { 
            setLoading(false);
        }
    };
    

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    {loading && <Loader />}
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl xl:text-3xl font-extrabold text-indigo-500">
                            Sign In
                        </h1>
                        <div className="w-full flex-1 mt-8">
                            <div className="flex flex-col items-center gap-4">
                                <button onClick={() => signIn('google')} className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                    <div className="bg-white p-2 rounded-full">
                                        <FaGoogle className="w-4 h-4" />
                                    </div>
                                    <span className="ml-4">
                                        Sign In with Google
                                    </span>

                                </button>
                                <button onClick={() => signIn('facebook')} className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                    <div className="bg-white p-2 rounded-full">
                                        <FaFacebook className="w-4 h-4" />
                                    </div>
                                    <span className="ml-4">
                                        Sign In with Facebook
                                    </span>

                                </button>
                                <button onClick={() => signIn('github')} className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                    <div className="bg-white p-1 rounded-full">
                                        <FaGithub className="w-6 h-6" />
                                    </div>
                                    <span className="ml-4">
                                        Sign In with GitHub
                                    </span>
                                </button>
                            </div>

                            <div className="my-12 border-b text-center">
                                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                    Or sign in with e-mail
                                </div>
                            </div>

                            <div className="mx-auto max-w-xs">
                                <input
                                    className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border ${errors.email ? 'border-red-500' : 'border-gray-200'
                                        } placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={handleChange}
                                />
                                {errors.email && (
                                    <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                                )}
                                <div className="relative">
                                    <input
                                        className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border ${errors.password ? 'border-red-500' : 'border-gray-200'
                                            } placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5`}
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        placeholder="Password"
                                        onChange={handleChange}
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-2 top-1/2 transform "
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="mt-1 text-red-500 text-sm">{errors.password}</p>
                                )}
                                <button onClick={handleLogin}
                                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                    <FaSignInAlt className="w-6 h-6 -ml-2" />
                                    <span className="ml-3">
                                        Sign In
                                    </span>
                                </button>
                                {errors.general && (
                                    <p className="mt-2 text-red-500 text-sm">{errors.general}</p>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                    <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')", backgroundSize: 'cover' }}>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
import React from 'react';
import Loader from '../global/Loader';


