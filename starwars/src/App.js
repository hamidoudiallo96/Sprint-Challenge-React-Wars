import React, {useState,useEffect} from 'react';
import axios from 'axios';
import HeaderContainer from './components/headerComponent/headerContainer'
import CardContainer from './components/cardComponent/cardContainer'
import { Container,Input,Button } from 'semantic-ui-react'



const flexDiv = {
  display:'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  textAlign:'center',
  marginLeft:'450px',
  marginRight:' 450px',
  marginBottom: '50px',
  marginTop:'50px',
 
}


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // useState
  const [id,setId] = useState('')
  const [idFromButton, setIDFromButton] = useState('1')
  const [name,setName] = useState('')
  const [hairColor,setHairColor] = useState('')
  const [gender,setGender] = useState('')
  const [height,setHeight] = useState('')
  const [mass,setMass] = useState('')

  const pageChange = () =>{
    setIDFromButton(id)
  }
 
  

  // Api fetch
  useEffect(()=>{
    axios.get(`https://swapi.co/api/people/${idFromButton}`)
    
    .then(data =>{
      console.log(data)
      const obj = data.data;
      console.log(obj.url)
      setName(obj.name);
      setGender(obj.gender)
      setHairColor(obj.hair_color)
      setHeight(obj.height)
      setMass(obj.mass)
      
      
      })
    .catch(err =>{
      console.log(err)
      })
    },[id, idFromButton])
  

  return (
    <Container textAlign ='center' >
      
      <HeaderContainer />
      <div style = {flexDiv}>
        <Input focus type = 'text' value = {id} onChange = {e =>setId(e.target.value)} placeholder = 'Pick from 0-9'/>
        <Button primary onClick = {pageChange}>Click Here</Button>
      </div>
      <CardContainer name = {name} hairColor = {hairColor} gender = {gender} height= {height} mass = {mass} />

    </Container>
  )
}

export default App;
