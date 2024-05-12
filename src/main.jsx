import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'


// ---------------------
// Components
// ---------------------
import Root from './routes/Root';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import BookPage, { loader as bookLoader } from './pages/BookPage';



// ---------------------
// Routing
// ---------------------
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: "books/:id",
            element: <BookPage />,
            loader: bookLoader
          }, 
          {
            path: "*",
            element: <Error404 />
          }
        ]
      }
    ]
  }
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
