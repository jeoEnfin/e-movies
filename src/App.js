import { useSelector} from 'react-redux';

import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import MovieList from './pages/MovieList';
import SeriesList from './pages/SeriesList';
import MyList from './pages/MyList';
import Login from './pages/Login';




const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/movies',
        element: <MovieList />
      },
      {
        path: '/series',
        element: <SeriesList />
      },
      {
        path: '/mylist',
        element: <MyList />
      }
    ]
  },
  { path: '/profile', element: <Profile /> },
  { path: '/login', element: <Login /> },
]);

function App() {
  const auth = useSelector(state => state.auth.isAuthenticated);
  
  console.log(auth);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
