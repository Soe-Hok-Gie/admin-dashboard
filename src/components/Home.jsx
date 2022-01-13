import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: auto;
    background-color: gray;
    display: flex;
`;
const WrapperSidebar = styled.div`
    height: 100vh;
    width: 300px;
    background-color: teal;
    display: flex;
    flex-wrap: wrap;

`;
const BoxSidebar = styled.div`
    width: 60%;
    height: 10%;
    background-color: cornsilk;
    border-radius: 10px;
`;
const Profil = styled.div`
    width: 70%;
    height: 10%;
    background-color: cornsilk;
    border-radius: 10px;
`;

const WrapperMain = styled.div`
    height:auto;
    background-color:cornsilk;
    width: 100%;
    padding: 4px;

`;
const Search = styled.div`
    background-color: rgb(243, 82, 114);
    width: 100%;
    height: 60px;   
`;
const WrapperBox = styled.div`
    background-color: burlywood;
    width: 100%;
    height: 200px;
    margin-top: 15px;

`;
const WrapperContent = styled.div`
    background-color:crimson;
    width: 100%;
    height: 200px;
    margin-top: 15px;
    margin-bottom: 100px;

`;
const WrapperFooter = styled.div`
 width: 100%;
 background:radial-gradient( #00586a,#92d593);   
 height: 100px; 
`;

const Home = () => {
    return (
        <Container>
        <WrapperSidebar>
        <BoxSidebar/>
        <BoxSidebar/>
        <BoxSidebar/>
        <Profil/>
        </WrapperSidebar>

        <WrapperMain>

        <Search>

        </Search>
        <WrapperBox>

        </WrapperBox>
        <WrapperBox>

        </WrapperBox>
        <WrapperContent>

        </WrapperContent>
        <WrapperFooter>

        </WrapperFooter>
        </WrapperMain>
        </Container>
    )
}

export default Home
