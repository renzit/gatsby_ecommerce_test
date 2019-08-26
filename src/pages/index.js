import React from "react"
import { Link, graphql } from "gatsby"
import { SEO, Jumbo, Products } from "../components"
// import styled from "styled-components"

export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
    allStripeSku {
      edges {
        node {
          id
          image
          price
          product {
            name
            metadata {
              description
              img
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <Jumbo
        description={data.allSite.edges[0].node.siteMetadata.description}
      />
      <Products products={data.allStripeSku.edges} />
    </>
  )
}

export default IndexPage
