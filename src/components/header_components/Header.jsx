import React from 'react'
import NavLists from './NavLists'

const Header = () => {
  return (
    <nav id='nav'>
        <div className='logo'>
          <a href="#">rthaqori</a>
        </div>
        <NavLists />
    </nav>
  )
}

export default Header