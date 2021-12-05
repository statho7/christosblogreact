import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import Article from './pages/Article';
// import Category from './pages/Category';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
// import Author from './pages/Author';
import { Suspense, lazy } from 'react';

const Author = lazy(() => import('./pages/Author'));
const Article = lazy(() => import('./pages/Article'));
const Category = lazy(() => import('./pages/Category'));

const App = () => {
  return (
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </Router>
  );
}

export default App
