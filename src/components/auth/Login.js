import React, { useState } from 'react';
import { FaGoogle, FaFacebook, FaGithub, FaTwitter, FaLinkedin, FaApple, FaDiscord } from 'react-icons/fa';
import {  signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { login } from '../../data/errors';
import { PiEyeClosedBold } from 'react-icons/pi';
import { BsFillEyeFill } from 'react-icons/bs'; 








 


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
    <form onSubmit={handleLogin}>
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
        {isLoading? 'Loading...': 'Login'}
      </button>
    </form>
  );
}

function LoginPage() {
  const [loginError, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { error } = router.query;
  const errorMessage = error && (login[error] ?? login.default);

  const handleLogin = async (formData) => {
    setIsLoading(true);
    try {
      const response = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (!response.ok) {
        console.error(response);
        setError(response.error);
      } else {
         router.push('/dashboard');
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const socialIcons = [
    { provider: 'google', icon: <FaGoogle />, colorClass: 'bg-red-500 hover:bg-red-600 text-white' },
    { provider: 'facebook', icon: <FaFacebook />, colorClass: 'bg-blue-500 hover:bg-blue-600 text-white' },
    { provider: 'github', icon: <FaGithub />, colorClass: 'bg-gray-700 hover:bg-gray-800 text-white' },
    { provider: 'twitter', icon: <FaTwitter />, colorClass: 'bg-blue-400 hover:bg-blue-500 text-white' },
    { provider: 'linkedin', icon: <FaLinkedin />, colorClass: 'bg-indigo-600 hover:bg-indigo-700 text-white' },
    { provider: 'apple', icon: <FaApple />, colorClass: 'bg-black text-white' },
    { provider: 'discord', icon: <FaDiscord />, colorClass: 'bg-purple-600 hover:bg-purple-700 text-white' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Log In</h2>
        <LoginForm onLogin={handleLogin} isLoading={isLoading && isLoading}/>
        <SocialLoginButtons onSocialLogin={signIn} socialIcons={socialIcons}/>
        {(error || loginError) && (
          <p className="mt-2 text-red-500 text-sm text-center">
            {error ? errorMessage : loginError}
          </p>
        )}
      </div>
    </div>
  );
}


export default LoginPage;
function SocialLoginButtons({ onSocialLogin, socialIcons }) {
  return (
    <div className="flex justify-center mt-4">
      {socialIcons.map((icon, index) => (
        <button
          key={index}
          onClick={() => onSocialLogin(icon.provider)}
          className={`p-2 rounded-full mx-2 ${icon.colorClass}`}
        >
          {icon.icon}
        </button>
      ))}
    </div>
  );
}