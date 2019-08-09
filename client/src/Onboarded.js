import React from 'react'

const Onboarded = ({ data }) => {
    return (
        <div className="userCard">
            <span><p>
                Recipe: {data.name}{" | "}
                Course: {data.course}{" | "}
                Technique: {data.technique}</p></span>
        </div>
    )
}

export default Onboarded