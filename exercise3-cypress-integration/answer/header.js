import React, {useEffect, useState} from "react"
import "./styles/header.scss"

import CampSpotsLogo from "images/icons/camp-spots-logo.svg"
import MegaNav from "./meganav/"

const Header = ({inert}) => {
    const [currentPathname, setCurrentPathname] = useState(null)
    useEffect(() => {
        setCurrentPathname(document.location.pathname)
    },[])
    return (
        <header id="header" inert={inert}>
            <div id="header-nav">
                <div id="header-logo">
                    <h1>
                        <a aria-current={currentPathname === '/' ? 'page' : null} href="/" className="header-main-item" data-testid="logo-link">
                            <span className="logo-img">
                                <img src={CampSpotsLogo} alt="" />
                            </span>
                            <span className="logo-text">CampSpots</span>
                        </a>
                    </h1>
                </div>
                <MegaNav />
                <div id="header-login">
                    <a href="#">Login</a>
                </div>
            </div>
        </header>
    )
}

export default Header