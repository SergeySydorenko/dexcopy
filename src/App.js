import Navigation from "./ui/Navigation.js";
import Header from "./ui/Header.js";
import Main from "./ui/Main.js";
import {useState} from 'react';
import Flex from "./components/Flex.js";

function App() {
  let [navPanel, setNavPanel] = useState('nav-main');
  const changeVisibility = (visibility) => {
      if(visibility)
          {setNavPanel('nav-main show');}
      else
          {setNavPanel('nav-main hide');}
  }
  return (
    <Flex className="App" direction='row'>
      {/* <button className="showNav" onClick={()=>changeVisibility(true)}>Show</button> */}
      <Navigation showNav={changeVisibility} navClass={navPanel}></Navigation>
      <Flex className="main" direction='column' width='100%'>
        <Header></Header>
        <Main/>
        <Main/>
      </Flex>
    </Flex>
  );
}

export default App;
