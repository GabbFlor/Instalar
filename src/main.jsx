import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Erro from './routes/Erro.jsx'

const routes = createBrowserRouter([
  {
    path: "/",

    element: <App />,

    errorElement: <Erro />,

    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
