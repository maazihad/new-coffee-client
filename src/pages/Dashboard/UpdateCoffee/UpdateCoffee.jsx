// import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  // const [name, setName] = useState(coffee.name);
  // const [chef, setChef] = useState(coffee.chef);
  // const [supplier, setSupplier] = useState(coffee.supplier);
  // const [taste, setTaste] = useState(coffee.taste);
  // const [category, setCategory] = useState(coffee.category);
  // const [details, setDetails] = useState(coffee.details);
  // const [photo, setPhoto] = useState(coffee.photo);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Update it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-house-server.onrender.com/coffee/${coffee._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedCoffee),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: 'Updated!',
                text: 'Coffee Updated',
                icon: 'success',
              });
            }
          });
      }
    });
  };
  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Update Coffee</h2>
      <form onSubmit={handleUpdate}>
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
            name='name'
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            defaultValue={coffee.name}
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
            name='chef'
            // value={chef}
            // onChange={(e) => setChef(e.target.value)}
            defaultValue={coffee.chef}
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
            name='supplier'
            // value={supplier}
            // onChange={(e) => setSupplier(e.target.value)}
            defaultValue={coffee.supplier}
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
            name='taste'
            // value={taste}
            // onChange={(e) => setTaste(e.target.value)}
            defaultValue={coffee.taste}
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
            name='category'
            // value={category}
            // onChange={(e) => setCategory(e.target.value)}
            defaultValue={coffee.category}
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
            name='details'
            // value={details}
            // onChange={(e) => setDetails(e.target.value)}
            defaultValue={coffee.details}
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
            name='photo'
            // value={photo}
            // onChange={(e) => setPhoto(e.target.value)}
            defaultValue={coffee.photo}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='flex items-center justify-between'>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Update Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
