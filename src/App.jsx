import React from 'react'
import Header from './components/header/Header'
import SideBar from './components/sideBar/SideBar'
import Footer from './components/footer/Footer'
import Profil from './components/content/Profil'
import Setting from './components/content/Setting'

import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate,

} from 'react-router-dom';


const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
         <Route path='/header' element={ <Header/>}/>
         <Route path='/sidebar' element={ <SideBar/>}/>
         <Route path='/profil' element={ <Profil/>}/>
         <Route path='/setting' element={ <Setting/>}/>
         <Route path='/footer' element={ <Footer/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
