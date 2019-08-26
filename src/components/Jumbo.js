import React from "react"
import { Image } from "./"
import { StyledJumbo } from "../styles/components"

export default function Jumbo({ description }) {
  return (
    <StyledJumbo>
      <div>
        <h2>Consigue las mejores imagenes para tu negocio.</h2>
        <small>{description}</small>
      </div>
      <Image name="icon" />
    </StyledJumbo>
  )
}
