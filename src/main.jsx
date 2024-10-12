import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Booklist from './components/Booklist.jsx';
import AddBook from './components/AddBook.jsx';
import Error from './components/Error.jsx';
import Book from './components/Book.jsx';
import Welcome from './components/Welcome.jsx';

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children: [
      {
        path: "/booklist",
        element:<Booklist/>,
      },{
        path:"/",
        element:<Welcome/>
      },{
        path:"/AddBook",
        element:<AddBook/>
      },{
        path:"/home",
        element:""
      },{
        path: "/book/:title",
        element: <Book/>
      }
    ],
    errorElement:<Error/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
