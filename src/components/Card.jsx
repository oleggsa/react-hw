import React from 'react'

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">{props.inside.title}</h2>
                <p className="card-text">{props.inside.description}</p>
                <button type="button" className="btn btn-primary">Go somewhere</button>
            </div>
        </div>
    )
}

export default Card;