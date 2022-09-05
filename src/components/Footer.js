import styled from "styled-components";
import LinkStyled from "../ui/LinkStyled";

const StyledFooter = styled.div`
    margin-top: auto;
    width: 100vw;
    height: 50px;
    background-color: #41436A;
    color: white;
    text-align: center;
    padding: 10px 0 0 0;
`

const Footer = () => {
    return(
        <StyledFooter>
            <LinkStyled to='/about' padding='5px' margin='auto' color='white' backgroundcolor='#fe9677'>About this app</LinkStyled>
        </StyledFooter>
    )
}

export default Footer;