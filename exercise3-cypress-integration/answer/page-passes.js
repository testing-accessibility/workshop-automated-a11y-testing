import React, { useContext, useEffect, useRef, useState } from "react"
import BodyClassName from "react-body-classname"
import {Helmet} from "react-helmet"

import AppContext from './AppContext'
import HeaderPortal from "components/header-portal"
import "components/styles/page-passes.scss"
import PaymentForm from "components/payment-form/payment-form"
import iconProPlan from "images/icons/icon-proplan.svg"

const PassesPage = () => {
    const appContext = useContext(AppContext)

    const dialogRef = useRef(null)
    const closeBtnRef = useRef(null)
    const basicDialogTriggerBtnRef = useRef(null)
    const proDialogTriggerBtnRef = useRef(null)

    const [dialogActive, setDialogState] = useState(false)
    const [currentDialog, setCurrentDialog] = useState('')
    const [activeTriggerBtn, setActiveTriggerBtn] = useState(null)

    const handleDialogClose = () => {
        setDialogState(false)

        appContext.setInertMarkupValue(false)
    }
    const handleDialogEscape = (event) => {
        if (event.key === 'Escape') {
            setDialogState(false)
            appContext.setInertMarkupValue(false)
        }
    }
    const openDialog = (dialogName, btnRef) => {
        setCurrentDialog(dialogName)
        setDialogState(true)

        appContext.setInertMarkupValue(true)
        
        setActiveTriggerBtn(btnRef)
    }
    useEffect(() => {
        if (dialogActive) {
            dialogRef.current.focus()
        } else {
            // send focus back to triggering button
            if (activeTriggerBtn && activeTriggerBtn.current) {
                activeTriggerBtn.current.focus()
            }
        }
    },[dialogActive, activeTriggerBtn])

    const Dialog = () => (
        <>
            <div
                aria-label="Subscription details"
                className={`payment-modal ${currentDialog}`}
                data-testid="payment-dialog"
                role="dialog"
                hidden={dialogActive ? null : 'hidden'}
                onKeyUp={(event)=> handleDialogEscape(event)}
                ref={dialogRef}
                tabIndex="-1"
            >
                <header>
                    <button
                        aria-label="Close dialog"
                        className="btn-close-dialog"
                        data-testid="btn-close-dialog"
                        onClick={handleDialogClose}
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
    )
    return (
        <BodyClassName className="page-plans">
            <>
                <HeaderPortal>
                    <h1 className="visually-hidden">CampSpots</h1>
                    <Dialog />
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
                                        onClick={() => { openDialog('basic', basicDialogTriggerBtnRef) }}
                                        ref={basicDialogTriggerBtnRef}
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
                                        onClick={() => { openDialog('pro', proDialogTriggerBtnRef) }}
                                        ref={proDialogTriggerBtnRef}
                                    >
                                        Join Now
                                    </button>
                                    <p>Lorem ipsum dolor <strong>sit</strong> amet, consectetur adipiscing elit.</p>
                                </div>
                            </li>
                        </ul>
                    </article>
                </section>
            </>
        </BodyClassName>
    )
}

export default PassesPage