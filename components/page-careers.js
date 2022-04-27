import React, { useRef, useState } from "react"
import BodyClassName from "react-body-classname"
import {Helmet} from "react-helmet"

import HeaderPortal from "components/header-portal"
import "components/styles/page-careers.scss"

const CareersPage = () => {
    const closeBtnRef = useRef(null)
    const customAmtRadio = useRef(null)

    const [dialogActive, setDialogState] = useState(false)
    let [currentDialog, setCurrentDialog] = useState('')

    const btnCloseClick = () => {
        setDialogState(false)
    }
    const focusInCustomInput = () => {
        customAmtRadio.current.checked = true
    }
    const openDialog = (dialogName) => {
        setCurrentDialog(dialogName)
        setDialogState(true)
    }
    return (
        <BodyClassName className="header-overlap page-careers">
            <>
                <HeaderPortal>
                    <h1 className="visually-hidden">CampSpots</h1>
                </HeaderPortal>
                <header className="page-header">
                    <div className="page-header-content layout">
                        <h2 className="primary-heading h1-style">Work With Us</h2>
                    </div>
                </header>
                <section>
                    <article className="layout">
                        <h2 className="h3-style">Open career positions</h2>
                        <div className="three-parts">
                            <div className="item">
                                <h4>Operations</h4>
                                <p><a href="#">Bookeeper, Accounting</a><br />
                                Remote</p>
                                <p><a href="#">Senior HR Partner</a><br />
                                Remote</p>
                                
                                <h4>Brand Management</h4>
                                <p><a href="#">Associate Brand Manager</a><br />
                                Remote</p>
                                <p><a href="#">Brand Manager</a><br />
                                Remote</p>
                            </div>
                            <div className="item">
                                <h4>Engineering</h4>
                                <p><a href="#">Data Engineer</a><br />
                                Remote</p>
                                <p><a href="#">Senior Data Engineer</a><br />
                                Remote</p>
                                <p><a href="#">Senior JavaScript Engineer</a><br />
                                Remote</p>
                                <p><a href="#">Senior Software Engineer, Web</a><br />
                                Remote</p>
                                <p><a href="#">Senior Software Engineer, CMS</a><br />
                                Remote</p>
                            </div>
                            <div className="item">
                                <h4>Audience Development</h4>
                                <p><a href="#">Managing Director</a><br />
                                Remote</p>
                                <p><a href="#">Site Partner</a><br />
                                Remote</p>
                                <p><a href="#">Marketing Coordinator</a><br />
                                Remote</p>
                            </div>
                        </div>
                    </article>
                    <article className="layout careers-portal-cta">
                        <div>
                            <h3>Employee portal</h3>
                            <p className="subhead">Join your team on CampSpot portal</p>
                            <p><a href="#" target="_blank">Log in to CampSpot Portal <span className="icon" aria-hidden="true"></span></a></p>
                        </div>
                    </article>
                </section>
            </>
        </BodyClassName>
    )
}

export default CareersPage