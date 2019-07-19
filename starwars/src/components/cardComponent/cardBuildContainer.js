import React from 'react'
const cardBuildStyle = {
    
    color:'crimson'
}
function CardBuildContainer({charHeight,charMass, charHairColor}){
    return(
        <div style = {cardBuildStyle}>
            <h2>Height:{charHeight}cm</h2>
            <h2>Weight: {charMass}kg</h2>
            <h2>Hair Color: {charHairColor}</h2>
        </div>
    )
}

export default CardBuildContainer