
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import MovieList from './pages/MovieList';
import SeriesList from './pages/SeriesList';

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
      }
    ]
  },
  { path: '/profile', element: <Profile /> }


]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
