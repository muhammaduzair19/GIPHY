import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./layout/Layout.jsx"
import Favorites from "./pages/Favorites.jsx"
import Category from "./pages/Category.jsx"
import Search from "./pages/Search.jsx"
import GifProvider from './context/context.jsx';
import SingleGifPage from "./pages/SingleGifPage.jsx"

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