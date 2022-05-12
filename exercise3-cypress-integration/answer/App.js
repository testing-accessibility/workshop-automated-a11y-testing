import React, {useRef} from "react"
import "wicg-inert"
import AppContext from "./components/AppContext"
import { Router } from "@reach/router"
import "./global-styles/variables.scss"
import "./global-styles/styles.scss"
import Header from "components/header"
import HomePage from "components/page-home"
import AboutPage from "components/page-about"
import CareersPage from "components/page-careers"
import TripIdeasPage from "components/page-trip-ideas"
import ListingsPage from "components/page-listings"
import Listing from "components/page-listing-detail"
import EventsPage from "components/page-events"
import PassesPage from "components/page-passes"
import SubmitListingPage from "components/page-submit-listing"
import HikesPage from "components/page-adventures-hikes"

import imgFooterLogo from "images/icons/footer-logo.svg"

export function App() {
	const [inertMarkupValue, setInertMarkupValue] = useState(false)
	
	const context = {
		inert: inertMarkupValue,
		setInertMarkupValue
	}
	return <AppContext.Provider value={context}>
		<Header inert={inertMarkupValue ? 'inert' : null} />
		<main id="main" inert={inertMarkupValue ? 'inert' : null}>
			<Router>
				<HomePage path="/" />
				<AboutPage path="/about" />
				<CareersPage path="/careers" />
				<ListingsPage path="/listings" />
				<Listing path="/listing/:id" />
				<SubmitListingPage path="/submit-listing" />
				<EventsPage path="/events" />
				<PassesPage path="/passes" />
				<HikesPage path="/adventures-hikes" />
				<TripIdeasPage path="/trip-ideas" />
			</Router>
		</main>
		<footer id="footer" inert={inertMarkupValue ? 'inert' : null}>
			<div className="layout">
				<div id="footer-logo">
					<img src={imgFooterLogo} alt="CampSpots" />
				</div>
			</div>
		</footer>
	</AppContext.Provider>
}
