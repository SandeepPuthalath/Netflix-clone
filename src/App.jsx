import React from "react"
import'./App.css'
import {originals, actions} from './urls'
import Navbar from "./Components/Navbar/Navbar"
import Banner from "./Components/Banner/Banner"
import RowPost from "./Components/RowPost/RowPost"


function App() {

  return (
   <div className="App">
    <Navbar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Originalrs'/>
    <RowPost url={actions} title='Action' isSmall/>
   </div>
  )
}

export default App
