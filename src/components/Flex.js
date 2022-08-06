import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    align-items: ${props => props.align || 'stretch'};
    justify-content: ${props => props.justify || 'stretch'};
    margin: ${props => props.margin || '0'};
    padding: ${props => props.padding || '0'};
    background-color: ${props => props.bgcolor || 'white'};
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    z-index: ${props => props.zIndex || '0'};
    color: ${props => props.color || 'black'};
`

const Flex = (props) => {
    return(
        <StyledDiv {...props}/>
    )
}

export default Flex;