import logo from './logo.svg';
import './App.css';
import Sub1 from "./ex1/sub/Sub1";
import Sub2 from "./ex1/sub/Sub2";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {useEffect} from "react";

function App() {

  useEffect(() => {
      localStorage.setItem("","")
  },[])

  return (
      <Router>

      <Link to={"/s1"}>S1</Link>
      <Link to={"/s2"}>S2</Link>

    <div className="App">
      <Route path="/s1">
          <Sub1></Sub1>
      </Route>
      <Route path="/s2">
          <Sub2></Sub2>
      </Route>
    </div>
      </Router>
  );
}

export default App;
