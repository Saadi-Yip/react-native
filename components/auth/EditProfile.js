import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaCloudUploadAlt, FaEnvelope, FaUser } from 'react-icons/fa';
import Layout from '../global/Layout';

const EditProfile = ({ user }) => {
  const { data: session, update, status } = useSession();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  if (status !== 'authenticated') {
    router.push('/login');
  }
  const [data, setFormData] = useState({
    id: user.id,
    name: user.name,
    email: user.email,
    image: user.image || '',
  });

  const [imagePreview, setImagePreview] = useState(data.image || '');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image' && files.length > 0) {
      setImagePreview(URL.createObjectURL(files[0]));
    }

    setFormData({
      ...data,
      [name]: name === 'image' ? files[0] : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage('');
    const formData = new FormData();

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, data[key]);
      }
    }

    try {
      const response = await fetch(`https://saadi-dashboard.cyclic.app/user/${user.id}`, {
        method: 'PATCH',
        body: formData,
      });
      if (response.ok) {
        const newSession = {
          ...session,
          user: {
            name: data.name,
            email: data.email,
            image: data.image
          }
        };

        await update(newSession);
        console.log(data)
        console.log(session);
        update && router.push('/');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message); // Set the error message from the backend
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout >
      <div className="flex justify-center items-center h-full">
        <div className="w-96 p-6 bg-white rounded-lg shadow-lg ">
          {imagePreview && (
            <div className="mb-4">
              <img
                src={imagePreview}
                alt="Profile Preview"
                className="mx-auto mb-4 rounded-full shadow-lg border-4 border-gray-100 object-fit"
                style={{ maxWidth: '120px', height: '120px' }}
              />
            </div>
          )}
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Edit Profile</h2>
          <form onSubmit={handleSubmit} encType="multipart/form-data">

            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600 text-lg">
                <FaUser className="inline-block mr-2 text-gray-500" />
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={data.name}
                onChange={handleChange}
                className="border rounded p-3 w-full text-gray-800 transition-all duration-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 text-lg">
                <FaEnvelope className="inline-block mr-2 text-gray-500" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="border rounded p-3 w-full text-gray-800 transition-all duration-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-gray-500 hover:underline transition-colors duration-300 cursor-pointer"
              >
                <FaCloudUploadAlt className="inline-block mr-2" /> Upload Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-t from-gray-500 to-gray-900 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-all duration-300 w-full"
            >
              {loading ? 'Loading...' : 'Update Profile'}
            </button>
            {errorMessage && (
              <div className="text-red-500 text-sm text-center mt-4">{errorMessage}</div>
            )}
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default EditProfile;
