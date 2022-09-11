import styled from "styled-components";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
    border: ${props => props.border || '1px solid white'};
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

const Arrow = styled.a`
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    color: white;
    width: 70px;
    align-self: flex-start;
    margin: 15px 0 0 0;
    border: none;
    &:hover{
        /* border: 1px solid white; */
        color:black;
    }
`

export const LinkArrow = (props) =>{
    let navigate = useNavigate();
    return(
    <Arrow {...props} onClick={()=>navigate(-1)}>
        <ion-icon name="arrow-back-outline" size='large'></ion-icon>
    </Arrow>
    )
}
export default LinkStyled;