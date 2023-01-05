import React from 'react'

import Style from './Navbar.module.css'
import Link from 'next/link'
import { Button } from '../components'

const Navbar = () => {
    const navLinks = [
        {
            name : "Home",
            link: "home"
        },
        {
            name : "Marketplace",
            link: "marketplace"
        },
        {
            name : "Sellers",
            link: "sellers"
        },
        {
            name : "Dashboard",
            link: "dashboard"
        }
    ]
  return (
    <div className={Style.nav}>
        <div className={Style.brand}>
            {/* <img src="" alt="" /> */}
        </div>
        <div className={Style.toggle}></div>
            <div className={Style.links}>
                {navLinks.map((el, i) => (
                    <div key={i + 1} className={Style.li}>
                    <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                    </div>
                ))}
            </div>
        <Button btnName="Contact" handleClick={()=>{}}/>
    </div>
  )
      }


export default Navbar