import { FaGoogle, FaFacebook, FaGithub, FaTwitter, FaLinkedin, FaApple, FaDiscord, FaInstagram } from 'react-icons/fa';

const socialIcons = [
    { provider: 'google', icon: <FaGoogle />, colorClass: 'bg-red-500 hover:bg-red-600 text-white' },
    { provider: 'facebook', icon: <FaFacebook />, colorClass: 'bg-blue-500 hover:bg-blue-600 text-white' },
    { provider: 'github', icon: <FaGithub />, colorClass: 'bg-gray-700 hover:bg-gray-800 text-white' },
    { provider: 'twitter', icon: <FaTwitter />, colorClass: 'bg-blue-400 hover:bg-blue-500 text-white' },
    { provider: 'linkedin', icon: <FaLinkedin />, colorClass: 'bg-indigo-600 hover:bg-indigo-700 text-white' }, 
    { provider: 'discord', icon: <FaDiscord />, colorClass: 'bg-purple-600 hover:bg-purple-700 text-white' },
  ];

  export default socialIcons;