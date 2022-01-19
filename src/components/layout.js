import React, {useContext, useState} from "react";
// import { Link } from "gatsby"
import Navbar from "./navbar";
// import { StaticImage } from "gatsby-plugin-image"
 
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider"
import ToggleSwitch from "./toggleSwitch";
import "./layout.scss";
const Layout = ({ location, title, children }) => {
  
  let [checked, setChecked] = useState(false);

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)
  console.log(state)
  console.log(dispatch)

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header"> 
      <Navbar title={title}/></header>
      <main>{children}</main>
      <footer className="footerMain">
      <ToggleSwitch id="toggleSwitch" checked={checked} onChange={
        ()=>{
        dispatch({type: 'TOGGLE_THEME'});
        setChecked(!checked)
        }} />
        <br />
        <br />
        {/* {state.theme}
        <button type="button" onClick={()=>dispatch({type: 'TOGGLE_THEME'})}>toggle</button> */}
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
