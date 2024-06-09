import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const userDetails = { username, email, password };

    await createUser(email, password)
      .then((result) => {
        console.log(result.user);
        //now new user created
        const createdAt = result.user?.metadata?.creationTime;
        const newUser = { email, createdAt };
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Register Successfully.',
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      })
      .catch((error) => {
        console.error(error);
      });

    console.log('User signed up:', userDetails);
    // form.reset();
  };

  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='username'
          >
            Username
          </label>
          <input
            type='text'
            id='username'
            name='username'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='email'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='password'
          >
            Password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='flex items-center justify-between'>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
