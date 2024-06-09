import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee, onDelete }) => {
  return (
    <div className='md:w-full  bg-white rounded-lg shadow-md overflow-hidden flex mb-4'>
      <div className='w-1/3'>
        <img
          className='object-cover  md:w-96'
          src={coffee.photo}
          alt={coffee.name}
        />
      </div>
      <div className='w-2/3 p-4'>
        <h2 className='text-xl font-bold mb-2'>{coffee.name}</h2>
        <p className='text-gray-700 mb-1'>
          <strong>Chef:</strong> {coffee.chef}
        </p>
        <p className='text-gray-700 mb-1'>
          <strong>Supplier:</strong> {coffee.supplier}
        </p>
        <p className='text-gray-700 mb-1'>
          <strong>Taste:</strong> {coffee.taste}
        </p>
        <p className='text-gray-700 mb-1'>
          <strong>Category:</strong> {coffee.category}
        </p>
        <p className='text-gray-700 mb-2'>
          <strong>Details:</strong> {coffee.details}
        </p>
        <div className='flex space-x-2 mt-4'>
          <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline'>
            Edit
          </button>
          <Link to={`/update-coffee/${coffee._id}`}>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline'>
              Update
            </button>
          </Link>
          <button
            onClick={() => onDelete(coffee._id)}
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline'
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
