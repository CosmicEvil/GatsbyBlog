import './navbar.scss'
import React, {useState, useEffect} from 'react'
import { Link } from "gatsby"

export default function Navbar({title}) {
    
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState()

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
      }

      useEffect(() => {

        setScreenWidth(window.innerWidth);
        window.addEventListener("resize", () => {
            setScreenWidth(window.innerWidth);
        });
        return () => {
          window.removeEventListener("resize", () => {});
        };

      }, [])
      return (
        <nav className='nav'>
          {(toggleMenu || screenWidth > 500) && (
          <ul className="list">
          <li className="items"><Link to="/">{title}</Link></li>
          <li className="items"><Link to="/learn">Learn</Link></li>
          <li className="items"><Link to="/blog">Blog</Link></li>
          <li className="items"><Link to="/about">About</Link></li>
        </ul>
          )}
    
          <button onClick={toggleNav} className="btn">BTN</button>
        </nav>
      )
    }
  