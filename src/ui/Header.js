import Flex from "../components/Flex";

const Header = ()=>{
    return(
        <Flex className="Header" justify='flex-end'>
            <Flex className="Header-input">
                <button className="Header-input-btn_img"><img></img></button>
                <input></input>
            </Flex>
            <Flex className="Header_autorization">
                <img>
                </img>
            </Flex>
        </Flex>
    )
}

export default Header;