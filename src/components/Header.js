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
const InputFlex = styled(Flex)`
    border: none;
    outline: none;
    width: 80%;
    border-radius: 25px;
    border: 2px solid #984063;
    background-color: #fe9677;
    height: 50px;
    margin: 5px;
    font-size: 20px;
    &:hover{
        border: 2px solid #f64668;
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
        <Flex justify='space-between' align='center' position='sticky' height='60px' top='0px' padding='5px' backgroundColor='#41436A'>
                <LinkStyled to='/' padding='5px' margin='0 0 0 10px' width='100px' backgroundcolor='#fe9677' hoverbackgroundcolor='#984063' color='white' minwidth='100px'>
                    <h2>Home</h2>
                </LinkStyled>
                <StyledForm onSubmit={e => search(e)}>
                    <InputFlex justify='flex-start' align='center' color='white' width='100%'>
                        <Input placeholder='Book title, author, genre etc.'/>
                        <ResetButton fontSize='16px' type='reset'>X</ResetButton>
                        <InputButton fontSize='16px'>
                            Search
                        </InputButton>
                    </InputFlex>
                </StyledForm>
        </Flex>
    )
}

export default Header;