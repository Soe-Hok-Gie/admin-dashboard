import React from 'react'
import styled from 'styled-components'
import { HomeOutlined,SettingsOutlined,FaceOutlined} from '@material-ui/icons'


const Container = styled.div`
    display: flex;
    background-color: teal;
    height: 100vh;
    
`
const Wrapper = styled.div`
   padding: 20px;
   background-color: chocolate;
`
const Menu = styled.div``
const Title = styled.h3``
const List = styled.ul``
const ListItem = styled.li``


const SideBar = () => {
    return (
        <Container>
            <Wrapper>
                <Menu>
                <Title>Dashbord</Title>
                <List>
                    <ListItem><HomeOutlined/>home</ListItem>
                    <ListItem><FaceOutlined/>profil</ListItem>
                    <ListItem><SettingsOutlined/>setting</ListItem>
                </List>
                </Menu>
            </Wrapper>
        </Container>
    )
}

export default SideBar
