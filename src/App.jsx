import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Article from './components/Article';
import Category from './components/Category';
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
        <Route path="/article/:id">
          <Article />
        </Route>
        <Route path="/category/:name">
          <Category />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App
