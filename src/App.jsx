import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Layout from "./pages/Layout";
import Error from "./pages/Error";
import Home from "./routes/Home";
import About from './routes/About';
import Contact from './routes/Contact';
import Login from './routes/Login';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/login',
        element: <Login/>
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
