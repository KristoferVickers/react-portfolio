import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Resume from './pages/Resume.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <About />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/resume',
          element: <Resume />,
        },
      ],
    },
  ]);

  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );