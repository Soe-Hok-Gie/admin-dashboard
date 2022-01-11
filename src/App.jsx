import React from 'react'
import Header from './components/header/Header'
import SideBar from './components/sideBar/SideBar'

// import Dashbord from './components/Dashbord'

import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate,

} from 'react-router-dom';
import styled from 'styled-components'

const Content = styled.div`
   padding-top: 72px;
   padding-left: 160px;
`;

const App = () => {
  return (
    <>
    <Header/>
    <SideBar/>
    <Content>
    <BrowserRouter>
      <Routes>
          {/* <Route path='/dashbord' element={ <Dashbord/>}/> */}

       </Routes>
     </BrowserRouter>
     </Content>
    </>
  )
}

export default App
