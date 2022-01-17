import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import './about.scss'
const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return(
    <Layout location={location} title={siteTitle}>
    <Seo title="All posts" />
    <h1>Our values</h1>
    <div className="belts">
    <StaticImage
               className="beltAbout"
              //  layout="fixed"
               formats={["auto", "webp", "avif"]}
               src="../../images/white_belt.png"
               width={75}
               height={75}
               quality={95}
               alt="Logo"
    />
    <StaticImage
               className="beltAbout"
               
               formats={["auto", "webp", "avif"]}
               src="../../images/yellow_belt.png"
               width={75}
               height={75}
               quality={95}
               alt="Logo"
    />
     <StaticImage
               className="beltAbout"
              //  layout="fixed"
               formats={["auto", "webp", "avif"]}
               src="../../images/orange_belt.png"
               width={75}
               height={75}
               quality={95}
               alt="Logo"
    />
     <StaticImage
               className="beltAbout"
               layout="fixed"
               formats={["auto", "webp", "avif"]}
               src="../../images/green_belt.png"
               width={75}
               height={75}
               quality={95}
               alt="Logo"
    />

     
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum mattis lorem, ut sagittis dui porta porttitor. Etiam eu tellus nec orci luctus euismod. Donec id augue non velit tincidunt commodo. Nullam sodales tortor nec ligula ultricies semper. Aenean vel elit dui. Nam finibus quam id lectus auctor euismod. Donec blandit facilisis sem, sit amet malesuada tellus molestie at. Praesent orci lorem, finibus at nisl eget, laoreet consectetur mauris. Sed pulvinar est arcu. Nulla aliquam neque orci, molestie dapibus tellus consectetur volutpat. Donec eget dui dignissim, hendrerit lectus sed, tincidunt sapien. Vestibulum sit amet eleifend erat, vel pharetra risus. Aenean venenatis placerat posuere.
    </p>
    <div className="belts">
    
     
     <StaticImage
               className="beltAbout"
              //  layout="fixed"
               formats={["auto", "webp", "avif"]}
               src="../../images/blue_belt.png"
               width={75}
               height={75}
               quality={95}
               alt="Logo"
    />
     <StaticImage
               className="beltAbout"
               layout="fixed"
               formats={["auto", "webp", "avif"]}
               src="../../images/red_belt.png"
               width={75}
               height={75}
               quality={95}
               alt="Logo"
    />
        <StaticImage
               className="beltAbout"
               layout="fixed"
               formats={["auto", "webp", "avif"]}
               src="../../images/purple_belt.png"
               width={75}
               height={75}
               quality={95}
               alt="Logo"
    />
      <StaticImage
               className="beltAbout"
              //  layout="fixed"
               formats={["auto", "webp", "avif"]}
               src="../../images/brown_belt.png"
               width={75}
               height={75}
               quality={95}
               alt="Logo"
    />
 
    </div>
    <p>Duis vehicula hendrerit ligula. Duis porta lorem sit amet sagittis semper. Aenean vestibulum tellus ex, eu tempus ex molestie quis. Aliquam ultricies mi sed tellus tempor, at molestie metus consectetur. Nunc varius mi vitae ligula hendrerit vehicula. Cras elementum consequat fermentum. Aliquam faucibus in risus condimentum commodo. Proin volutpat vulputate felis ac auctor. Praesent scelerisque vehicula quam.</p>
    <div className="belts">
    <StaticImage
               className="beltAbout"
              //  layout="fixed"
               formats={["auto", "webp", "avif"]}
               src="../../images/black_belt.png"
               width={75}
               height={75}
               quality={95}
               alt="Logo"
    />
     <StaticImage
               className="beltAbout"
              //  layout="fixed"
               formats={["auto", "webp", "avif"]}
               src="../../images/orange_belt.png"
               width={75}
               height={75}
               quality={95}
               alt="Logo"
    />
     <StaticImage
               className="beltAbout"
              //  layout="fixed"
               formats={["auto", "webp", "avif"]}
               src="../../images/green_belt.png"
               width={75}
               height={75}
               quality={95}
               alt="Logo"
    />
      <StaticImage
               className="beltAbout"
              //  layout="fixed"
               formats={["auto", "webp", "avif"]}
               src="../../images/logo.png"
               width={75}
               height={75}
               quality={95}
               alt="Logo"
    />
    </div>
  </Layout>
     

  )
}

export default AboutPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
