
import React from "react"
import {Link} from "gatsby"
import menuStyle from './menu.module.scss'

const Menu = () => {
    return (
    <header className={menuStyle.menu}>
                <h1>
                    <Link className={menuStyle.brandName} to="/">Brand</Link>
                </h1>
                <ul className={menuStyle.navList}>
                    <li>
                        <Link className={menuStyle.navItem} activeClassName={menuStyle.activeNavItem} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={menuStyle.navItem} activeClassName={menuStyle.activeNavItem} to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className={menuStyle.navItem} activeClassName={menuStyle.activeNavItem} to="/about">About</Link>
                    </li>
                    <li>
                        <Link className={menuStyle.navItem} activeClassName={menuStyle.activeNavItem} to="/contact">Contact</Link>
                    </li>
                </ul>
    </header>
    )
}

export default Menu
