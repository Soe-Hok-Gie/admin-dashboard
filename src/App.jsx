import React from 'react'
import styled from 'styled-components'
import Header from './components/header/Header'
import SideBar from './components/sideBar/SideBar'
import Footer from './components/footer/Footer'
import Profil from './components/content/Profil'
import Setting from './components/content/Setting'




const Container = styled.div``;

const App = () => {
  return (
    <Container>
    <Header/>
    <SideBar/>
    <Profil/>
    <Setting/>
    <Footer/>
    </Container>
  )
}

export default App
