import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height : 100vh;
    width: 100vw;
    display: flex;
`;
const Wrapper = styled.div`
    background-color: bisque;
`;
const Left = styled.div`
`;
const Logo = styled.h1``;
const Menu = styled.ul``;
const Menuitem = styled.li``;


const SideBar = () => {
    return (
        <Container>
            <Wrapper>
            <Left>
                <Logo>ReactDev</Logo>
                <Menu>
                    <Menuitem>Home</Menuitem>
                    <Menuitem>Project</Menuitem>
                    <Menuitem>Billings</Menuitem>
                    <Menuitem>Team Member</Menuitem>
                    <Menuitem>Stats</Menuitem>
                    <Menuitem>Settings</Menuitem>
                </Menu>
            </Left>
            </Wrapper>
        </Container>     
    )
}

export default SideBar
