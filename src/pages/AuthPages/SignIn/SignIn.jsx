import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';

const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const userDetails = { email, password };

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        const user = {
          email,
          lastLoginAt: result?.user?.metadata?.lastSignInTime,
        };

        //=======Patch update=========
        fetch('http://localhost:5000/users', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: 'Success',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Cool',
              });
            }
          });
      })
      .catch((error) => {
        console.error(error);
      });

    form.reset();
    console.log('User signed in:', userDetails);
  };

  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Sign In</h2>
      <form onSubmit={handleSubmit}>
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
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
