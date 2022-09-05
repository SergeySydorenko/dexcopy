import Flex from "../ui/Flex";
import styled from "styled-components";
import LinkStyled from "../ui/LinkStyled";


const About = () => {

    return(
        <Flex direction='column' backgroundColor='#984063' width='100%' height='100%' justify='center' align='center' color='white'>
            <p>This app were made by using: react, google books api, axios, react-router, styled components.</p>
            <p>Made by Serhii Sydorenko.</p>
            <Flex direction='row'>
                <LinkStyled 
                    as='a' 
                    href='https://www.linkedin.com/in/sergey-sydorenko/' 
                    target="_blank" 
                    padding='5px' 
                    width='80px' 
                    color='white' 
                    margin='30px'
                    border='1px solid white'
                >
                    Linkedin
                </LinkStyled>
            </Flex>
        </Flex>
    )
}

export default About;