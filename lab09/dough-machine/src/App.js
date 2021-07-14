import NavBar from './NavBar';
import Home from './Home';
import Pastries from './Pastries';
import Contact from './Contact';
import Help from './Help';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/Pastries" component={ Pastries } />
          <Route path="/Contact" component={ Contact } />
          <Route path="/Help" component={ Help } />
        </Switch>
      </div>
    </Router>
    // <div className="App">
    //   <NavBar />
    //   <div className="content">
    //     <Home />
    //   </div>
    // </div>
  );
}

export default App;
