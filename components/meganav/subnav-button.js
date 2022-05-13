import React from "react"
import PropTypes from 'prop-types'

const SubNavButton = React.forwardRef((props, ref) => (
    <h2>
        <div
            className="megamenu-navitem header-main-item" 
            id={props.idRef}
            data-testid={props.idRef}
            onClick={(event) => { props.onClick(event) }}
            ref={ref}
        >
            {props.buttonName}
        </div>
    </h2>
))

SubNavButton.propTypes = {
    buttonName: PropTypes.string,
    idRef: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default SubNavButton