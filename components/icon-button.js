import React from "react"

const IconButton = ({name, onClick}) => {
    return (
        <div
            className="btn-submit btn-lookingglass"
            data-testid="btn-submit"
            onClick={(event) => { onClick(event)}}
        >
            <span className="icon-lookingglass-white"></span>
        </div>
    )
}

export default IconButton