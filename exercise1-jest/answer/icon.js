import React from "react"
import './icons.scss'

const Icon = ({name}) => {
    return (
        <span
            aria-label={name}
            className={`icon-${name}`}
            role="img"
        >
        </span>
    )
}

export default Icon