import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Tudo } from "./pages/Inicio.styles.js"

import { Inicio } from "./pages/Inicio.jsx"
import { Jogo } from "./pages/Jogo.jsx"
import { Referencias } from "./pages/Referencias.jsx"
import { GlobalStyle } from "./styles/global.js"
import { Guia } from "./pages/Guia_de_como_utilizar.jsx"
import { Integrantes } from "./pages/Integrantes.jsx"
import { Pecas } from "./pages/Pecas_usadas.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />
  },
  {
    path: "/Guia",
    element: <Guia />
  },
  {
    path: "/Integrantes",
    element: <Integrantes />
  },
  {
    path: "/Pecas",
    element: <Pecas />
  },
  {
    path: "/Referencias",
    element: <Referencias />
  },
  {
    path: "/Jogo",
    element: <Jogo />
  }
])

export function App() {
  return (
    <Tudo>
      <RouterProvider router={router} />
      <GlobalStyle />
    </Tudo>
  )
}
