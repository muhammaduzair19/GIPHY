import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./layout/Layout"
import Favorites from "./pages/Favorites"
import Category from "./pages/Category"
import Search from "./pages/Search"
import GIF from "./pages/GIF"

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/favs',
        element: <Favorites />,
      },
      {
        path: '/:category',
        element: <Category />,
      },
      {
        path: '/:type/:slug',
        element: <GIF />,
      },
      {
        path: '/search/:query',
        element: <Search />,
      },
    ]
  }
])


const App = () => {
  return <RouterProvider router={router} />
}

export default App