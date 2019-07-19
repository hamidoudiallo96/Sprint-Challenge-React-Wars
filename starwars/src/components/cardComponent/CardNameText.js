import React from 'react'
function CardNameText({charName1}){
    const cardTextStyle = {
    
        color:'crimson'
    }
    return(
        <h1 style = {cardTextStyle}>{charName1}</h1>
    )
}
export default CardNameText;