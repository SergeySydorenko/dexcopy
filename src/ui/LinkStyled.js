import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledLink = styled(Link)`
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    min-width: ${props => props.minWidth || ''};
    visibility: ${props => props.visibility || ''};
    width: ${props => props.width || '90%'};
    height: ${props => props.height || 'auto'};
    color: ${props => props.color || 'black'};
    margin: ${props => props.margin || '0'};
    padding: ${props => props.padding || '5px 0 5px 10px'};
    font-size: ${props => props.fontsize || 'inherit'};
    border: ${props => props.border || '0'};
    border-radius: ${props => props.borderRadius || '5px'};
    background-color: ${props => props.backgroundcolor || 'inherit'};
    &:hover{
        background-color: ${props => props.hoverbackgroundcolor || '#41436a'};;
        transition: .4s
    }
`


const LinkStyled = ({children, ...props}) =>{

    return(
        <StyledLink {...props}>
            {children}
        </StyledLink>
    )
}

export default LinkStyled;