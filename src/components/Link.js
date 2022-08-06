import styled from "styled-components";
const StyledLink = styled.a`
    text-decoration: none;
    color: ${props => props.color || 'black'};
    margin: ${props => props.margin || '0'};
    padding: ${props => props.padding || '0'};
    &:hover{
        background-color: #D6D5CB;
        transition: .2s
    }
`


const Link = ({children, ...props}) =>{

    return(
        <StyledLink {...props}>
            {children}
        </StyledLink>
    )
}

export default Link;