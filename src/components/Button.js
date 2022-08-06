import styled from "styled-components";

const StyledButton = styled.button`
    background-color: transparent;
    border: ${props => props.border || 'none'};
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    margin: ${props => props.margin || 'auto'};
    padding: ${props => props.padding || 'auto'};
    
    &:hover{
        background-color: #D6D5CB;
    }
`


const Button = (props) => {
    return (
        <StyledButton {...props}/>
    )
}

export default Button;