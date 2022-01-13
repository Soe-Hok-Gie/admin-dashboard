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
`;
const WrapperMain = styled.div`
    height:auto;
    background-color:cornsilk;
    width: 100%;
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

        </WrapperSidebar>

        <WrapperMain>

        <Search>

        </Search>
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
