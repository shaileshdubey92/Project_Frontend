import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import Addcontact from './assets/component/Addcontact'
import Getcontact from './assets/component/Getcontact'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


const App = () => {
  const [contacts,setContact] = useState([])
  const [id, setId] = useState("")
 
  return (
   
      <Router>
        
    

      <Routes>
        <Route path='/' element={<Getcontact id={id} setId={setId}/>}/>
        <Route path='/addcontact' element={<Addcontact id={id} setId={setId}/>}/>
      </Routes>

      </Router>
   
  )
} 

export default App
