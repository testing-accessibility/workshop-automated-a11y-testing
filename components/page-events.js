import React, { useEffect } from "react"
import BodyClassName from "react-body-classname"
import {Helmet} from "react-helmet"

import HeaderPortal from "components/header-portal"
import "components/styles/page-events.scss"
import video from "images/camping-reel.mp4"

const EventsPage = () => {

    return (
        <BodyClassName className="header-overlap page-events">
            <>
                <HeaderPortal>
                    <h1 className="visually-hidden">CampSpots</h1>
                </HeaderPortal>
                <section>
                    <header className="page-header">
                        <div className="header-video">
                            <video autoPlay muted loop>
                                <source src={video} />
                                Sorry, your browser doesn't support this video.
                            </video>
                        </div>
                        <div className="page-header-content layout">
                            <h2 className="primary-heading h1-style">Events</h2>
                        </div>
                    </header>
                    <article className="wide-layout two-parts-70-30">
                        <div>
                            <div className="headline-flex">
                                <h2>Looking for fun stuff to do? Join a community event!</h2>
                                <svg version="1.1" x="0px" y="0px" viewBox="0 0 32 32">
                                    <path className="one" d="M16,26c1.1,0,2,0.9,2,2v2c0,1.1-0.9,2-2,2s-2-0.9-2-2v-2C14,26.9,14.9,26,16,26z" />
                                    <path className="one" d="M16,6c-1.1,0-2-0.9-2-2V2c0-1.1,0.9-2,2-2s2,0.9,2,2v2C18,5.1,17.1,6,16,6z" />
                                    <path className="one" d="M30,14c1.1,0,2,0.9,2,2s-0.9,2-2,2h-2c-1.1,0-2-0.9-2-2s0.9-2,2-2H30z" />
                                    <path className="one" d="M6,16 c0,1.1-0.9,2-2,2H2c-1.1,0-2-0.9-2-2s0.9-2,2-2h2C5.1,14,6,14.9,6,16z" />
                                    <path className="two" d="M25.9,23.1l1.4,1.4c0.8,0.8,0.8,2,0,2.8s-2,0.8-2.8,0l-1.4-1.4c-0.8-0.8-0.8-2,0-2.8S25.1,22.3,25.9,23.1z" />
                                    <path className="two" d=" M6.1,8.9L4.7,7.5c-0.8-0.8-0.8-2,0-2.8s2-0.8,2.8,0l1.4,1.4c0.8,0.8,0.8,2,0,2.8S6.9,9.7,6.1,8.9z" />
                                    <path className="two" d="M25.9,8.9c-0.8,0.8-2,0.8-2.8,0s-0.8-2,0-2.8l1.4-1.4c0.8-0.8,2-0.8,2.8,0s0.8,2,0,2.8L25.9,8.9z" />
                                    <path className="two" d="M6.1,23.1c0.8-0.8,2-0.8,2.8,0s0.8,2,0,2.8l-1.4,1.4c-0.8,0.8-2,0.8-2.8,0s-0.8-2,0-2.8C4.7,24.5,6.1,23.1,6.1,23.1z" />
                                    <path className="middle" d="M16,8c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8S20.4,8,16,8z M16,21c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5
                                    S18.8,21,16,21z" />
                                </svg>
                            </div>
                            <ul className="event-list">
                                <li><a href="https://summermeltdown.com/">Summer Meltdown Festival 2022</a> - July 28-31, Sky Meadows Park - Darrington, WA</li>
                                <li>YurtFest 2022 - August 5-7 - Deming, WA</li>
                                <li>Lopez Island Bikepacking Adventure - Ongoing - Lopez Island, WA</li>
                                <li>Mountain Loop Backpacking - September, dependent on conditions - Granite Falls, WA</li>
                                <li>Mountain bike skills workshops - All summer long - Bellingham, WA</li>
                            </ul>
                        </div>
                        <div className="aside">
                            <h3>Summer must-haves</h3>
                            <ul className="event-list">
                                <li>Camp towel</li>
                                <li>Backpacker water filter</li>
                                <li>Hip-pack</li>
                                <li>Sunscreen</li>
                                <li>Pizza slice pool float</li>
                                <li>Twinkle lights</li>
                            </ul>
                        </div>
                    </article>
                </section>
            </>
        </BodyClassName>
    )
}

export default EventsPage