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

const Home = () => {
    return (
        <Container>
        <WrapperSidebar>

        </WrapperSidebar>
        <WrapperMain>

        </WrapperMain>
        </Container>
    )
}

export default Home
