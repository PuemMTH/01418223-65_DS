import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

import App from './App'
import ErrorPage from './components/error_page'
import Quest from './pages/question'
import Result from './pages/result'
import About from './pages/refer'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/q/:id",
    element: <Quest/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/result",
    element: <Result/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "about",
    element: <About/>,
    errorElement: <ErrorPage/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);