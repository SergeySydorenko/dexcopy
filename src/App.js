import Navigation from "./components/Navigation.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <div className="main">
        <Header></Header>
        <Main/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
