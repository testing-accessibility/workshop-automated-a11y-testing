import React from "react"
import "./styles/header.scss"

import CampSpotsLogo from "images/icons/camp-spots-logo.svg"
import MegaNav from "./meganav/"

const Header = ({inert}) => {
    return (
        <div id="header" inert={inert}>
            <div id="header-nav">
                <div id="header-logo">
                    <a href="/" className="header-main-item">
                        <span className="logo-img">
                            <img src={CampSpotsLogo} />
                        </span>
                        <span className="logo-text">CampSpots</span>
                    </a>
                </div>
                <MegaNav />
                <div id="header-login">
                    <a href="#">Login</a>
                </div>
            </div>
        </div>
    )
}

export default Header