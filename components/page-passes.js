import React, { useRef, useState } from "react"
import BodyClassName from "react-body-classname"
import {Helmet} from "react-helmet"

import HeaderPortal from "components/header-portal"
import "components/styles/page-passes.scss"

import iconProPlan from "images/icons/icon-proplan.svg"
import iconCreditCard from "images/icons/icon-credit-card.svg"
import iconPayPal from "images/icons/paypal-inactive-dark.svg"
import iconCreditCardTypes from "images/icons/credit-card-icons.png"

const PassesPage = () => {
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
                        <h3>Donate to support local sites</h3>
                        <form>
                            <div className="control-group radios">
                                <label>
                                    <input id="amt_3" name="amounts" type="radio" value="3" />
                                    $3
                                </label>
                                <label>
                                    <input id="amt_5" name="amounts" type="radio" value="5" />
                                    $5
                                </label>
                                <label>
                                    <input id="amt_10" name="amounts" type="radio" value="10" />
                                    $10
                                </label>
                                <label className="custom-radio-group">
                                    <input id="amt_custom" name="amounts" type="radio" value="Custom" ref={customAmtRadio} />
                                    <input onFocus={focusInCustomInput} type="text" id="amt_custom_text" placeholder="$ Other amount" />
                                </label>
                            </div>
                            <div className="payment-buttons">
                                <h3>Payment Method</h3>
                                <div>
                                    <button type="button" className="payment-button active">
                                        <img alt="Credit card" width="25px" src={iconCreditCard} />
                                        <span>Credit card</span>
                                    </button>
                                    <button type="button" className="payment-button">
                                        <img alt="PayPal" width="50px" src={iconPayPal} />
                                    </button>
                                </div>
                            </div>
                            <div className="payment-fields">
                                <div className="control-group">
                                    <label htmlFor="name" className="visually-hidden">Cardholder name</label>
                                    <input type="text" name="name" id="name" placeholder="Name" />
                                </div>
                                <div className="control-group">
                                    <div className="media-img-after">
                                        <img src={iconCreditCardTypes} style={{width: '127px', height: '20px'}} aria-hidden="true" />
                                        <label htmlFor="cc-number" className="visually-hidden">Credit Card Number</label>
                                        <input type="number" name="cc-number" id="cc-number" placeholder="Credit card number" />
                                    </div>
                                </div>
                                <div className="control-group row">
                                    <div>
                                        <label htmlFor="expiry" className="visually-hidden">Expiration</label>
                                        <input type="text" name="expiry" id="expiry" placeholder="Month/Year" />
                                    </div>
                                    <div>
                                        <label htmlFor="cvc" className="visually-hidden">CVC Code</label>
                                        <input type="text" name="cvc" id="cvc" placeholder="CVC" max-length="4" />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <label htmlFor="phone-number" className="visually-hidden">Phone Number</label>
                                    <input type="number" name="number" id="number" placeholder="Phone number" />
                                </div>
                                <div className="control-group">
                                    <button className="btn-pay">
                                        <span className="text text-pay-pro">Pay $139</span>
                                        <span className="text text-pay-basic">Pay $99</span>
                                        <span className="icon-lock"></span>
                                    </button>
                                </div>
                                <p className="subhead">Secure payment processing by <a href="https://stripe.com">Stripe</a>.</p>
                            </div>
                        </form>
                    </section>
                </div>
                <div className="modal-curtain" hidden={dialogActive ? null : 'hidden'}></div>
            </>
        </BodyClassName>
    )
}

export default PassesPage