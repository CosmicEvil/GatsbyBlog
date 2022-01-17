import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const MainPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return(
    <Layout location={location} title={siteTitle}>
    <Seo title="All posts" />
    <h1>Welcome to the learning part</h1>
    <p>This is how you will get to earn higher levels of belts, but this part is not yet a work in progress even</p>
    
  </Layout>
     

  )
}

export default MainPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
