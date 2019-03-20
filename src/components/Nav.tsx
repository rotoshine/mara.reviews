import { Link } from 'gatsby'
import React from 'react'

import './Nav.scss'

const menus: any[] = []
const Nav = () => (
  <nav className="Nav">
    {menus.map((menu, i) => {
      return (
        <Link className="Nav__menu" key={i} to={menu.path}>
          {menu.name}
        </Link>
      )
    })}
  </nav>
)

export default Nav