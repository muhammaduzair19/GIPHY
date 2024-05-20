import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./layout/Layout"
import Favorites from "./pages/Favorites"
import Category from "./pages/Category"
import Search from "./pages/Search"
import GifProvider from "./context/context"
import SingleGifPage from "./pages/SingleGifPage"

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
        element: <SingleGifPage />,
      },
      {
        path: '/search/:query',
        element: <Search />,
      },
    ]
  }
])


const App = () => {
  return <GifProvider>
    <RouterProvider router={router} />
  </GifProvider>
}

export default App