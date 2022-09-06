import styled from "styled-components";

const StyledDiv = styled.div`
    display: ${props => props.display || 'flex'};
    max-height: 100%;
    min-height: ${props => props.minHeight || ''};
    font-size: ${props => props.fontSize || '16px'};
    overflow-y: ${props => props.overflow || ''};
    overflow-x: hidden;
    flex-shrink: ${props => props.shrink || 'none'};;
    flex-wrap: ${props => props.wrap || 'none'};
    flex-grow: ${props => props.flexGrow || 'none'};
    top: ${props => props.top || 'auto'};
    left: ${props => props.left || 'auto'};
    position: ${props => props.position || 'static'};
    flex-direction: ${props => props.direction || 'row'};
    align-items: ${props => props.align || 'stretch'};
    justify-content: ${props => props.justify || 'stretch'};
    margin: ${props => props.margin || '0'};
    padding: ${props => props.padding || '0'};
    background-color: ${props => props.backgroundColor || 'inherit'};
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    z-index: ${props => props.zIndex || ''};
    color: ${props => props.color || 'black'};
`
const StyledAccordeon = styled(StyledDiv)`
    @media screen{
        max-width: ${props => props.transform || '0px'};
        /* overflow-y: ${props => props.transform ? 'auto' : 'hidden'}; */
        overflow-x: hidden;
        transition: max-width 0.1s;
        transition: 0.3s;
    }
    @media screen and (min-width: 1000px){
        max-width: ${props => props.transform || '250px'};
        /* overflow-y: ${props => props.transform ? 'auto' : 'hidden'}; */
        overflow-x: hidden;
        transition: max-width 0.1s;
        transition: 0.3s;
    }
`
const Flex = (props) => {
    return(
        <StyledDiv {...props}/>
    )
}

export const Accordeon = (props)=>{
    return(
        <StyledAccordeon {...props}/>
    )
}

export default Flex;