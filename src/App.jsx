import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Article from './pages/Article';
import Category from './pages/Category';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import Author from './pages/Author';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/article/:id">
          <Article />
        </Route>
        <Route path="/author/:name">
          <Author />
        </Route>
        <Route path="/category/:name">
          <Category />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App
