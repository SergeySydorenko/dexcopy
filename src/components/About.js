import Flex from "../ui/Flex";
import styled from "styled-components";
import LinkStyled from "../ui/LinkStyled";
import { LinkArrow } from "../ui/LinkStyled";


const About = () => {

    return(
        <Flex direction='column' backgroundColor='#41436A' width='100vw' height='100vh' justify='center' align='center' color='white'>
            <LinkArrow to='/'>
                {/* <ion-icon name="arrow-back-outline" size='large'></ion-icon> */}
            </LinkArrow>
            <Flex margin='auto 0 0 0' color='white' fontSize='20px'>This app were made by using: react, google books api, axios, react-router, styled components.</Flex>
            
            <Flex direction='row' color='white' align='center' margin='10px 0 auto 0' fontSize='20px'>
                <p>Author:</p>
                <LinkStyled 
                    as='a' 
                    href='https://www.linkedin.com/in/sergey-sydorenko/' 
                    target="_blank" 
                    padding='5px' 
                    width='100px' 
                    color='white' 
                    margin='30px'
                >
                    Linkedin
                </LinkStyled>
            </Flex>
        </Flex>
    )
}

export default About;