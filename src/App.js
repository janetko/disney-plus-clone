import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./components/Login";
import Header from "./components/Header";
import './App.css';
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/home" component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
