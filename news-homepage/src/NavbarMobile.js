import React from 'react'

export default function NavbarMobile({onClose}) {
  return (
    <div className='navbar--mobile'>
        <div onClick={onClose}>
            <img src='Image/icon-menu-close.svg' alt='' className='icon--close'/>
        </div>
        <ul className='ul--mobile'>
            <li>home</li>
            <li>new</li>
            <li>popular</li>
            <li>trending</li>
            <li>categories</li>
        </ul>
    </div>
  )
}
