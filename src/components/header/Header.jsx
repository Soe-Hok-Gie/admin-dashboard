import React from 'react'
import styled from 'styled-components'
import { SearchOutlined} from '@material-ui/icons'


const Container = styled.div`
    display: flex;  
    justify-content: center;
    background-color:teal;

`;
const Wrapper = styled.div`
    background-color:teal;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const SearchContainer = styled.div`
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
      <Container>
        <Wrapper>
                <SearchContainer>
                    <Input/>
                    <SearchOutlined style={{color:"whitesmoke", fontSize:"15px"}}/>
                </SearchContainer>
        </Wrapper>
    </Container>
    )
}

export default Header
