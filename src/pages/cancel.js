import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default function cancel() {
  return (
    <div>
      <SEO title="Compra Cancelada"></SEO>
      <Purchase>
        <h2>Compra Cancelada</h2>
        <p>Es una lastima, pero no te preocupes</p>
        <p>este item seguira en la tienda para cuando lo necesites</p>
        <span role="img" aria-label="emoji">
          💔
        </span>
        <Link to="/">
          <Button>Volver al Cátalogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
