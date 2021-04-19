import './App.css';
import React from "react";
import Container from "./components/pages/Container";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./components/core/Nav";
import FirePage from "./components/pages/FirePage";

function App(){
//const [phrase, setPhrase] = useState('');

  return (
      <Router>
        <div className="App">
          <Nav/>

          <Switch>
            <Route exact path={"/"} component={Container}/>
            <Route path={"/firepage"} component={FirePage} />
          </Switch>
        </div>
      </Router>
  );
}


export default App;