import { useState } from 'react';
import toast from 'react-hot-toast';

const AddCoffee = () => {
  const [name, setName] = useState('');
  const [chef, setChef] = useState('');
  const [supplier, setSupplier] = useState('');
  const [taste, setTaste] = useState('');
  const [category, setCategory] = useState('');
  const [details, setDetails] = useState('');
  const [photo, setPhoto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCoffee = { name, chef, supplier, taste, category, details, photo };
    // Handle form submission
    console.log('Coffee added:', newCoffee);

    fetch('http://localhost:5000/coffee', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success('Successfully Product added.');
        }
      });
  };

  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Add New Coffee</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='name'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='chef'
          >
            Chef
          </label>
          <input
            type='text'
            id='chef'
            value={chef}
            onChange={(e) => setChef(e.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='supplier'
          >
            Supplier
          </label>
          <input
            type='text'
            id='supplier'
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='taste'
          >
            Taste
          </label>
          <input
            type='text'
            id='taste'
            value={taste}
            onChange={(e) => setTaste(e.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='category'
          >
            Category
          </label>
          <input
            type='text'
            id='category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='details'
          >
            Details
          </label>
          <input
            type='text'
            id='details'
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='photo'
          >
            Photo URL
          </label>
          <input
            type='text'
            id='photo'
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='flex items-center justify-between'>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Add Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
