import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Root from './Root'
import NotFound from './Components/NotFound'
import Home from './Pages/Home'
import About from './Pages/About'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root/>,
    errorElement: <NotFound/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/about',
        element:<About/>
      },
    ]
  }
])


function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
