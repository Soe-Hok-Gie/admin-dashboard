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
const Menu = styled.div`
    margin-bottom: 10px;
`
const Title = styled.h3`
    font-size: 20px;
`
const List = styled.ul`
    list-style: none;
    padding: 5px;
`
const ListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 5px;
    cursor: pointer;
`


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
