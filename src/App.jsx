import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Article from './components/Article';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/article/:title">
          <Article />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App
