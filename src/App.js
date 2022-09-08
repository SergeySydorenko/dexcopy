import Navigation from "./components/Navigation.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import {useState} from 'react';
import Flex from "./ui/Flex.js";
import axios from "axios";
import {Outlet} from "react-router-dom";
import Footer from "./components/Footer.js";
import LinkStyled from "./ui/LinkStyled.js";
import styled from "styled-components";

const LinkAbout = styled(LinkStyled)`
  font-size: 18px;
  /* &:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: .4s;
  } */
`

function App() {
  let [navPanel, setNavPanel] = useState();
  let [navButton, setNavButton] =useState('hidden');
  let [bookData, setBookData] =useState();
  let [searchInfo, setSearchInfo] = useState();
  let [page, setPage] = useState(0);

  const changeVisibility = (visibility) => {
    if(visibility){
      setNavPanel('250px');
      setNavButton('hidden');
    }else{
      setNavPanel('0');
      setNavButton('visible');
    }
  }

  const resize = () => {
    const windowSize = 1000;
    if(Number(document.documentElement.clientWidth) > windowSize){
      setNavPanel('250px');
      setNavButton('hidden');
    }else if(Number(document.documentElement.clientWidth) < windowSize){
      setNavPanel('0');
      setNavButton('visible');
    }
}
  return (
    <Flex className="App" direction='column' align='center' height='100vh' backgroundColor='#41436A'>
        <Outlet/>
        <Flex >
          <LinkAbout to='/about' color='white' margin='0 0 10px 0' border='1px solid white' width='80px' padding='1px 0 5px 0'>About</LinkAbout>
        </Flex>
    </Flex>
  );
}

export default App;
