import Flex from "../ui/Flex";
import styled from "styled-components";

const StartScreenStyle = styled(Flex)`
    background-image: url('https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: #41436a;
`
const PStyled = styled.p`
    margin: 15px;
    font-size: 24px;
    font-weight: 700;

`

const StartScreen = () =>{

    return(
        <StartScreenStyle justify="flex-start" height='100%' width='100%' align='flex-start'>
            <PStyled>“There is no friend as loyal as a book.”― Ernest Hemingway</PStyled>
        </StartScreenStyle>
    )
}

export default StartScreen;