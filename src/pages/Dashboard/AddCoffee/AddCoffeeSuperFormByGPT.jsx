import { useState } from 'react';

const AddCoffeeSuperFormByGPT = () => {
  const [coffee, setCoffee] = useState({
    name: '',
    chef: '',
    supplier: '',
    taste: '',
    category: '',
    details: '',
    photo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCoffee({
      ...coffee,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Coffee added:', coffee);
  };

  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Add New Coffee</h2>

      <form onSubmit={handleSubmit}>
        {[
          { label: 'Name', name: 'name', type: 'text' },
          { label: 'Chef', name: 'chef', type: 'text' },
          { label: 'Supplier', name: 'supplier', type: 'text' },
          { label: 'Taste', name: 'taste', type: 'text' },
          { label: 'Category', name: 'category', type: 'text' },
          { label: 'Details', name: 'details', type: 'text' },
          { label: 'Photo URL', name: 'photo', type: 'text' },
        ].map(({ label, name, type }) => (
          <div className='mb-4' key={name}>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor={name}
            >
              {label}
            </label>
            <input
              type={type}
              id={name}
              name={name}
              value={coffee[name]}
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
        ))}

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

export default AddCoffeeSuperFormByGPT;
