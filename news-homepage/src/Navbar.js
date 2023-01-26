import React from 'react'
import NavbarMobile from './NavbarMobile'

export default function Navbar() {
  const[openMenu, setOpenMenu] = React.useState(false)

  const handleClick = () =>{
    setOpenMenu(!openMenu)
  }

  return (
    <nav className='navbar'>
        <div>
            <img src='Image/logo.svg' alt='the logo with a blue colored w'/>
        </div>
        <ul className='ul--desktop'>
            <li>home</li>
            <li>new</li>
            <li>popular</li>
            <li>trending</li>
            <li>categories</li>
        </ul>
        <div className='icon--menu' onClick={handleClick}>
          <img src='Image/icon-menu.svg' alt='three bold horizontal lines stacked on top of each other with spacing representing the hamburger icon'/>
        </div>
        {openMenu && <NavbarMobile onClose={() => setOpenMenu(false)}/>}
    </nav>
  )
}
