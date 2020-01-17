
import React from "react"

import Header from "./menu"
import Footer from "./footer"
import "../css/style.scss"
import layoutStyle from './layout.module.scss'


const Layout = (props) => {
    return (
    <div className={layoutStyle.container}>
        <div className={layoutStyle.content}>
            <Header />
            {props.children}
        </div>
        <Footer />
    </div>
    )
}

export default Layout
