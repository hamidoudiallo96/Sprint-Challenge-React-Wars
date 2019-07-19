import React from 'react'
import CardNameContainer from './cardNameContainer';
import CardBuildContainer from './cardBuildContainer'
import {Card} from 'semantic-ui-react'
import '../../sw-bg.jpg'

const cardStyle = {
    width: '100%',
    marginLeft: '415px',
    
    
}


function CardContainer ({name,mass,height,hairColor}){
   
    return (
       <div style = {cardStyle}>
            <Card
                image= '../../sw-bg.jpg'
                header= {<CardNameContainer charName = {name} />}
                
                description= {<CardBuildContainer  charMass = {mass} charHeight = {height} charHairColor = {hairColor} />}
                
            />
            
           
       </div>
    )
}

export default CardContainer;


            
