import logo from './logo.svg';
import './App.css';
import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from "./components/counter";
//import About-1 from "./components/about/about";
import About from "./components/about";
import Home from "./components/home";
import Gallery from "./components/gallery";

function App() {
  return (
      <Router>
        <nav className="navbar navbar-expand navbar-brand m-2">
            <ul className="navbar-nav">
                <li className="nav-link"><Link to="/home">Home</Link></li>
                <li className="nav-link"><Link to="/counter">Counter</Link></li>
                <li className="nav-link"><Link to="/about">About</Link></li>
                <li className="nav-link"><Link to="/gallery">Gallery</Link></li>
            </ul>
        </nav>
        <div>
          <div className="m-4">
              <Switch>
                  <Route path="/home" component={Home}></Route>
                  <Route path="/counter" component={Counter}>
                      <Counter title="Counter 1" value={1} image="images/profile.jfif"/>
                      <Counter title="Counter 2" value={2} image="images/mlk.jfif"/>
                      <Counter title="Counter 3" value={3} image="images/lion_africa.jpg"/>
                  </Route>
                  <Route path="/about" component={About}></Route>
                  <Route path="/gallery" component={Gallery}></Route>
              </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
