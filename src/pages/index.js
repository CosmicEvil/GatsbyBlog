import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import './main-index.scss'
const MainPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return(
    <Layout location={location} title={siteTitle}>
    <Seo title="All posts" />
    <h1>Welcome to {siteTitle}</h1>
    
    <h3>This is the new way of learning karate</h3>
    <p>You can earn new belts here by doing various tasks, and by unlocking a new belt, you will also unlock new courses, content and even some goodies!</p>
    <div className="mainBlock">

    <div className="block wide">
    <StaticImage
               className="belt"
               layout="fixed"
               formats={["auto", "webp", "avif"]}
               src="../images/white_belt.png"
               width={150}
               height={150}
               quality={95}
               alt="Logo"
    />
    <div className="right">
      <h4>White belt</h4>
      <p>First level of the DojoDAO - <br /> Unlock the first course and an NFT!<br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum mattis lorem, ut sagittis dui porta porttitor.</p>
    </div>
    </div> 

    <div className="block">
    <StaticImage
               className="belt"
               layout="fixed"
               formats={["auto", "webp", "avif"]}
               src="../images/yellow_belt.png"
               width={150}
               height={150}
               quality={95}
               alt="Logo"
    />
    <div className="right">
      <h4>Yellow belt</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum mattis lorem, ut sagittis dui porta porttitor. </p>
    </div>
    </div> 
    <div className="block">
    <StaticImage
               className="belt"
               layout="fixed"
               formats={["auto", "webp", "avif"]}
               src="../images/orange_belt.png"
               width={150}
               height={150}
               quality={95}
               alt="Logo"
    />
    <div className="right">
      <h4>Orange belt</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum mattis lorem, ut sagittis dui porta porttitor. </p>
    </div>
    </div> 
    <div className="block wide">
    <StaticImage
               className="belt"
               layout="fixed"
               formats={["auto", "webp", "avif"]}
               src="../images/green_belt.png"
               width={150}
               height={120}
               quality={95}
               alt="Logo"
    />
    <div className="right">
      <h4>Green belt</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum mattis lorem, ut sagittis dui porta porttitor. Etiam eu tellus nec orci luctus euismod. Donec id augue non velit tincidunt commodo. Nullam sodales tortor nec ligula ultricies semper. Aenean vel elit dui. Nam finibus quam id lectus auctor euismod. Donec blandit facilisis sem, sit amet malesuada tellus molestie at. Praesent orci lorem, finibus at nisl eget, laoreet consectetur mauris. Sed pulvinar est arcu. Nulla aliquam neque orci, molestie dapibus tellus consectetur volutpat. Donec eget dui dignissim, hendrerit lectus sed, tincidunt sapien. Vestibulum sit amet eleifend erat, vel pharetra risus. Aenean venenatis placerat posuere.</p>
    </div>
    </div> 
    <div className="block">
    <StaticImage
               className="belt"
               layout="fixed"
               formats={["auto", "webp", "avif"]}
               src="../images/blue_belt.png"
               width={150}
               height={150}
               quality={95}
               alt="Logo"
    />
    <div className="right">
      <h4>Blue belt</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum mattis lorem, ut sagittis dui porta porttitor. </p>
    </div>
    </div> 
   
    <div className="block">
    <StaticImage
               className="belt"
               layout="fixed"
               formats={["auto", "webp", "avif"]}
               src="../images/red_belt.png"
               width={150}
               height={150}
               quality={95}
               alt="Logo"
    />
        <div className="right">

      <h4>Red belt</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum mattis lorem, ut sagittis dui porta porttitor. </p>
    </div>    
    </div> 
    <div className="block">
    <StaticImage
               className="belt"
               layout="fixed"
               formats={["auto", "webp", "avif"]}
               src="../images/purple_belt.png"
               width={150}
               height={150}
               quality={95}
               alt="Logo"
    />
    <div className="right">
      <h4>Purple belt</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum mattis lorem, ut sagittis dui porta porttitor. </p>
    </div>
    </div> 
    <div className="block">
    <StaticImage
               className="belt"
               layout="fixed"
               formats={["auto", "webp", "avif"]}
               src="../images/brown_belt.png"
               width={150}
               height={150}
               quality={95}
               alt="Logo"
    />
    <div className="right">
      <h4>Purple belt</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum mattis lorem, ut sagittis dui porta porttitor. </p>
    </div>
    </div> 
    <div className="block wide">
    <StaticImage
               className="beltBlack"
               layout="fixed"
               formats={["auto", "webp", "avif"]}
               src="../images/black_belt_super.png"
               width={260}
               height={200}
               quality={95}
               alt="Logo"
    />
    <div className="right">
      <h4>Black belt</h4>
      <p>YOU <strong>FUCKING MADE IT!!</strong><br />The endgame!</p>
    </div>
    </div>
    </div>
    <div className="mainBlock footer">
      <h2>Ready To start Learning???</h2>
      <button className="main-button">Yes send me a white belt!</button>
    </div>
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
