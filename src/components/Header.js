import Flex from "../ui/Flex";
import Button, {VisibleButton} from "../ui/Button";
import Input from "../ui/Input";
import LinkStyled from "../ui/LinkStyled";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const StyledForm = styled.form`
    width: 80%;
    /* margin: 5px 0 0 0; */
`;
const HomeButton = styled(LinkStyled)`
    @media (max-width: 768px) {
        width: 55px;
        font-size: 16px;
        margin: 0 0 0 5px;
    }
`

const InputFlex = styled(Flex)`
    border: none;
    outline: none;
    width: 100%;
    border-radius: 25px;
    border: 2px solid black;
    background-color: white;
    height: 50px;
    margin: 5px;
    font-size: 20px;
    &:hover{
        border: 2px solid black;
    }
    @media (max-width: 768px){
        height: 40px;
        width: 95%;
        font-size: 16px;
    }
`;
const InputButton = styled(Button)`
    margin: 0 10px 0 0;
    color: white;
    width: 50px;
    height: 100%;
    &:hover{
        background-color: transparent;
        /* color: white; */
        /* transition: .2s; */
    }
`;
const ResetButton = styled(Button)`
    /* margin: 0 5px 0 0; */
    cursor: pointer;
    margin-left: auto;
    width: 30px;
    height: 30px;
    visibility: ${props => props.visible || ''};
    font-size: 16px;
    text-align: center;
    &:hover{
        background-color: transparent;
        /* color: white; */
        /* transition: .2s; */
    }
    @media (max-width: 768px){
        font-size: 15px;
    }
`;

const Header = (props)=>{

    let navigate = useNavigate();


    const search = (e) =>{
        e.preventDefault();
        console.log(e);
        if(e.target[0].value){
            navigate(`search=${e.target[0].value}`);
            e.target[0].value = '';
        }
    }
    
    return(
        <Flex width='100%' direction='column' justify='center' align='center' position='sticky' height='100%' top='0px' padding='5px' backgroundColor='#41436A' overflow='hidden'>
                {/* <HomeButton 
                    to='/' 
                    padding='5px' 
                    margin='0 0 0 10px' 
                    width='100px' 
                    backgroundcolor='#fe9677' 
                    hoverbackgroundcolor='#984063' 
                    color='white' 
                    minwidth='100px' 
                    fontSize='20px'
                >
                    Home
                </HomeButton> */}
                <Flex color='white' fontSize='20px'>Try to type book's title</Flex>
                <StyledForm onSubmit={e => search(e)} >
                    <InputFlex justify='flex-start' align='center' color='white' width='100%'>
                        <Input type='text' placeholder='Write your book title here'/>
                        <ResetButton fontSize='16px' type='reset' margin='0 10px 0 0'>X</ResetButton>
                        {/* <InputButton fontSize='16px'>
                            Search
                        </InputButton> */}
                    </InputFlex>
                </StyledForm>
        </Flex>
    )
}

export default Header;