import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const SecondPage = () => (
  <>
    <SEO title="Page two" />
    <h1>Hola desde la pagina 2</h1>
    <p>Bienvenidos a la pagina 2</p>
    <Link to="/">Volver al Inicio</Link>
  </>
)

export default SecondPage
