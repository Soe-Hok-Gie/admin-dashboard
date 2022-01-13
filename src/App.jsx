import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate,

} from 'react-router-dom';
import Home from './components/Home';



const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/home' element={<Home/>}/>
       </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App
