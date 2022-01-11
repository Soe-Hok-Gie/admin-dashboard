import React from 'react'
import styled from 'styled-components'
import { SearchOutlined} from '@material-ui/icons'

// const Container = styled.div`
//     height: 50px;
//     background-color: black;
//     display: flex;
//     position: fixed;
// `;


const Wrapper = styled.div`
    width: 100%;
    background-color:teal;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
`;

const SearchHeader = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
`;

const Header = () => {
    return (
        // <Container>
        <Wrapper>
                <SearchHeader>
                    <Input/>
                    <SearchOutlined style={{color:"whitesmoke", fontSize:"15px"}}/>
                </SearchHeader>
        </Wrapper>
    // </Container>
    )
}

export default Header
