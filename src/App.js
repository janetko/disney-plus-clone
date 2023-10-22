import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./components/Login";
import Header from "./components/Header";
import './App.css';
import Home from "./components/Home";
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/detail/:id" component={Detail}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
