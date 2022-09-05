import Navigation from "./components/Navigation.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import {useState} from 'react';
import Flex from "./ui/Flex.js";
import axios from "axios";
import {Outlet} from "react-router-dom";
import Footer from "./components/Footer.js";

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
    <Flex className="App" direction='row' justify='space-between' height='100vh'>
      {window.addEventListener('resize', resize)}
      {/* <Navigation showNav={changeVisibility} transform={navPanel}></Navigation> */}
      <Flex className="main" direction='column' width='100%' height='100%' justify='flex-start' overflow='auto' flexGrow='1' backgroundColor='white'>
        <Header showNav={changeVisibility} visibility={navButton} bookData={bookData}></Header>
        {/* {bookData ? <Main bookData={bookData} pagination={pagination}/> : <h2>Now there is no books. Try to search.</h2>} */}
        <Outlet/>
        <Footer/>
      </Flex>
    </Flex>
  );
}

export default App;
