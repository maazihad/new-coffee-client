import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';
import toast from 'react-hot-toast';
import { useState } from 'react';

const Home = () => {
  const loadCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadCoffees);

  const onDelete = (id) => {
    console.log('delete id : ', id);
    fetch(`https://coffee-house-server.onrender.com/coffee/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success('Successfully deleted');
          console.log(data);
        }
        const remaining = coffees.filter((coffee) => coffee._id !== id);
        setCoffees(remaining);
      });
  };

  return (
    <div>
      Total Coffee : {coffees.length}
      <div>
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            onDelete={onDelete}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
