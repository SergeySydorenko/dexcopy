import styled from "styled-components";

const StyledInput = styled.input`
    border: none;
    outline: none;
    width: 80%;
    /* border-radius: 5px; */
    /* justify-items: flex-start; */
    background-color: transparent;
    height: 90%;
    margin: 0 0 0 20px;
    font-size: 20px;
    /* padding: 20px; */
    /* &:focus{
        outline: none;
        border: 1px solid red;
        transition: 0.3s;
    } */
`

const Input = (props) =>{
    return(
        <StyledInput {...props}/>
    )
}

export default Input;