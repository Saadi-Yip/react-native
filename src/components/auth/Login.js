import React, { useState } from 'react';
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { login } from '../../data/errors';
import LoginForm from './Form';
import socialIcons from './../../data/icons';
import SocialLoginButtons from './SocialButtons';

function LoginPage() {
  const [loginError, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    router.push('/dashboard');
  }
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


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-xs sm:max-w-sm w-full p-6 bg-white rounded-lg shadow-md">
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


