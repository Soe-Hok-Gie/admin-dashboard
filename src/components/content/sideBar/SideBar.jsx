import React from 'react'
import styled from 'styled-components'
import { HomeOutlined,SettingsOutlined,FaceOutlined} from '@material-ui/icons'


const Container1 = styled.div`
position: fixed;
top: 0;
width: 100px;
height: 100vh;
background-color: crimson;
padding: .80px 16px 0 0;
z-index: 100;
`
const Wrapper = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
overflow: hidden;
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
        <Container1>
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
        </Container1>
    )
}

export default SideBar
