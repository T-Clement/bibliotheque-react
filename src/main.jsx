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
import BooksPage, { loader as booksLoader } from './pages/BooksPage';
import AddBookPage from './pages/AddBookPage';
import AddAuthorPage from './pages/AddAuthorPage';
import AddEditorPage from './pages/AddEditorPage';



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
            path: "books",
            element: <BooksPage />,
            // children : [
            //   {
            //     element: <BookList />,
            //     loader: booksLoader
            //   }
            // ]
            loader: booksLoader
          }, 
          {
            path: "book/new",
            element: <AddBookPage />
          },
          {
            path: "author/new",
            element: <AddAuthorPage />
          },
          {
            path: "editor/new",
            element: <AddEditorPage />
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
