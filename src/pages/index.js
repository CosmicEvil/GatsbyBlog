import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const MainPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return(
    <Layout location={location} title={siteTitle}>
    <Seo title="All posts" />
    <h1>Welcome to {siteTitle}</h1>
    
    <p>This is the new way of learning karate</p>
    
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
