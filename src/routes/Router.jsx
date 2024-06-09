import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import AddCoffee from '../pages/Dashboard/AddCoffee/AddCoffee';
import UpdateCoffee from '../pages/Dashboard/UpdateCoffee/UpdateCoffee';
import SignUp from '../pages/AuthPages/SignUp/SignUp';
import SignIn from '../pages/AuthPages/SignIn/SignIn';
import Users from '../pages/Dashboard/Users/Users';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <div>Something here wrong..</div>,
    children: [
      {
        path: '/',
        loader: () => fetch('https://coffee-house-server.onrender.com/coffee'),
        element: <Home></Home>,
      },
      {
        path: '/add-coffee',
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: '/update-coffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`https://coffee-house-server.onrender.com/coffee/${params.id}`),
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>,
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>,
      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: () => fetch('https://coffee-house-server.onrender.com/users'),
      },
    ],
  },
]);

export default router;
