import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Erro from './routes/Erro.jsx'
import Sobre_nos from './routes/Sobre_nos.jsx'
import Servicos from './routes/Servicos.jsx'
import Contato from './routes/Contato.jsx'
import Geral from './styles/Geral.jsx'

const routes = createBrowserRouter([
  {
    path: "/",

    element: <App />,

    errorElement: <Erro />,

    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/sobre-nos",
        element: <Sobre_nos />
      },
      {
        path: "/servicos",
        element: <Servicos />
      },
      {
        path: "/contato",
        element: <Contato />
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Geral />
    <RouterProvider router={routes} />
  </StrictMode>,
)
