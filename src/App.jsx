import React from 'react'
import Header from './components/header/Header'

// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   // Navigate,

// } from 'react-router-dom';

import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    background-color: crimson;
`;

const App = () => {
  return (
    // <>
    // <Content>
    // <BrowserRouter>
    //   <Routes>
    //       {/* <Route path='/dashbord' element={ <Dashbord/>}/> */}

    //    </Routes>
    //  </BrowserRouter>
    //  </Content>
    // </>
    <Container>
     <Header/>
    </Container>
  )
}

export default App
