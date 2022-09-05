import styled from "styled-components";

const StyledButton = styled.button`
    cursor: pointer;    
    float: ${props => props.float || 'none'};
    background-color: ${props => props.backgroundcolor || 'transparent'};
    overflow: ${props => props.overflow || 'auto'};
    font-size: ${props => props.fontSize || '20px'};
    border: ${props => props.border || 'none'};
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    margin: ${props => props.margin || '0'};
    padding: ${props => props.padding || '0'};
    border-radius: ${props => props.borderRadius || '0'};
    &:hover{
        background-color: ${props => props.bgColorHover || '#984063'};
        color: ${props => props.colorhover || ''};
        transition: .2s;
    }
`
const HidingButton = styled(StyledButton)`

    @media screen{
        visibility: ${props => props.visibility || 'visible'};
    }
    @media screen and (min-width: 1000px){
        visibility: ${props => props.visibility || 'hidden'};
    }

`

const Button = (props) => {
    return (
        <StyledButton {...props}/>
    )
}

export const VisibleButton = (props) =>{
    return(<HidingButton {...props}/>)
}
export default Button;