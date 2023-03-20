import React from 'react'

export const NavBar = () => {
  return (
    <div className="navContainer">
        <nav className="nav">
            <div className="nav__brand">
                <a className="nav__link" href="#">Home</a>
            </div>
            <ul className="nav__list">
                <li>
                    <a className="nav__link" href="#">About</a>
                </li>
                <li>
                    <a className="nav__link" href="#">Shop</a>
                </li>
                <li>
                    <a className="nav__link" href="#">Contact</a>
                </li>
                <li>
                    <a className="nav__link" href="#">Blog</a>
                </li>
            </ul>
        </nav>
     </div>
  )
}

export default NavBar;