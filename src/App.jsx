import { useState } from 'react'
import './App.css'
import Color from './component/Color'
import Home from './component/Home'
import Menu from './component/Menu'
import Event from './component/Event'
import BookTable from './component/BookTable'
import Footer from './component/Footer'
function App() {
  return (
    <div className="App">
      <Color/>
      <Home/>
      <Menu/>
      <Event/>
      <BookTable/>
      <Footer/>
    </div>
  )
}

export default App
