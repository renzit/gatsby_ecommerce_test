import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default function gracias() {
  return (
    <div>
      <SEO title="Compra Exitosa"></SEO>
      <Purchase>
        <h2>Compra Exitosa</h2>
        <p>Espero que disfrutes tus imagenes, usalas con orgullo</p>
        <p>Te espero para el proximo trabajo, no pares de mejorar!</p>
        <span role="img" aria-label="emoji">
          ❤️
        </span>
        <Link to="/">
          <Button>Volver al Cátalogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
