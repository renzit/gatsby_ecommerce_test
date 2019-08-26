/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require("react")
const { CartProvider } = require("./src/context")
const { GlobalStyles } = require("./src/styles")
const Layout = require("./src/components/layout").default

exports.wrapRootElement = ({ element }) => (
  <CartProvider>
    <GlobalStyles>
      <Layout>{element}</Layout>
    </GlobalStyles>
  </CartProvider>
)
