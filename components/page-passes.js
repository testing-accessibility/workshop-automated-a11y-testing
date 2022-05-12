import React, { useRef, useState } from "react"
import BodyClassName from "react-body-classname"
import {Helmet} from "react-helmet"

import HeaderPortal from "components/header-portal"
import "components/styles/page-passes.scss"
import PaymentForm from "components/payment-form/payment-form"
import iconProPlan from "images/icons/icon-proplan.svg"

const PassesPage = () => {
    const closeBtnRef = useRef(null)

    const [dialogActive, setDialogState] = useState(false)
    let [currentDialog, setCurrentDialog] = useState('')

    const btnCloseClick = () => {
        setDialogState(false)
    }
    const openDialog = (dialogName) => {
        setCurrentDialog(dialogName)
        setDialogState(true)
    }
    return (
        <BodyClassName className="page-plans">
            <>
                <HeaderPortal>
                    <h1 className="visually-hidden">CampSpots</h1>
                </HeaderPortal>
                <section className="layout-centered">
                    <header className="page-header">
                        <div className="page-header-content layout">
                            <h2 className="primary-heading h1-style">Pick a Plan and Start Your Adventure Today!</h2>
                        </div>
                    </header>
                    <article className="layout">
                        <ul className="plan-list">
                            <li className="plan-basic">
                                <div>
                                    <h3>CampSpots <span>Basic</span></h3>
                                    <h4>$99<span>/year</span></h4>
                                    <p className="subhead">Renewed annually</p>

                                    <ul>
                                        <li>
                                            <span className="icon-checkmark-gray"></span>
                                            <span className="text">Unlimited overnight stays with No Camping Fees</span>
                                        </li>
                                        <li>
                                            <span className="icon-checkmark-gray"></span>
                                            <span className="text">100% money back guarantee</span>
                                        </li>
                                        <li>
                                            <span className="icon-x"></span>
                                            <span className="text"><del>Access to spa facilities &amp; restaurants</del></span>
                                        </li>
                                    </ul>
                                    <button
                                        id="btn-join-basic"
                                        onClick={()=> { openDialog('basic') }}
                                    >
                                        Join Now
                                    </button>
                                    <p>Vitae maximus turpis tempor <strong>nec</strong>.</p>
                                </div>
                            </li>
                            <li className="plan-pro">
                                <div>
                                    <span className="icon-proplan"></span>
                                    <h3>CampSpots <span>Pro</span></h3>
                                    <h4>$139<span>/year</span></h4>
                                    <p className="subhead">Renewed annually</p>

                                    <ul>
                                        <li>
                                            <span className="icon-checkmark-orange"></span>
                                            <span className="text">Unlimited overnight stays with No Camping Fees</span></li>
                                        <li>
                                            <span className="icon-checkmark-orange"></span>
                                            <span className="text">100% money back guarantee</span>
                                        </li>
                                        <li>
                                            <span className="icon-checkmark-orange"></span>
                                            <span className="text">Access to spa facilities &amp; restaurants</span>
                                        </li>
                                    </ul>
                                    <button
                                        id="btn-join-pro"
                                        onClick={()=> { openDialog('pro') }}
                                    >
                                        Join Now
                                    </button>
                                    <p>Lorem ipsum dolor <strong>sit</strong> amet, consectetur adipiscing elit.</p>
                                </div>
                            </li>
                        </ul>
                    </article>
                </section>
                <div
                    className={`payment-modal ${currentDialog}`}
                    role="dialog"
                    hidden={dialogActive ? null : 'hidden'}
                >
                    <header>
                        <button
                            className="btn-close-dialog"
                            onClick={btnCloseClick}
                            ref={closeBtnRef}
                        >
                            X
                        </button>
                        <img src={iconProPlan} alt="" />
                        <div id="header-basic">
                            <h2>CampSpots<span>Basic</span></h2>
                            <h3>$99/year</h3>
                        </div>
                        <div id="header-pro">
                            <h2>CampSpots<span>Pro</span></h2>
                            <h3>$139/year</h3>
                        </div>
                    </header>
                    <section className="payment-form">
                        <PaymentForm  />
                    </section>
                </div>
                <div className="modal-curtain" hidden={dialogActive ? null : 'hidden'}></div>
            </>
        </BodyClassName>
    )
}

export default PassesPage