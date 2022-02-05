import React from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from "./components/Home"
import Search from "./components/Search"
import Favourites from "./components/Favourites"
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav">
          <nav className="navbar">
          <ul>
            <li><Link to="/">Home </Link></li>
            <li><Link to="/search">Search </Link></li>
            <li><Link to="/favourites">Favourites </Link></li>
            <li><img className="logo" src="https://www.pngall.com/wp-content/uploads/5/NASA-Logo-PNG-High-Quality-Image.png" alt="" /></li>
            </ul>
          </nav>
        </div>
        <div className="routes">
          <Route path="/" exact render={() => <Home />} />
          <Route path="/search" exact render={() => <Search />} />
          <Route path="/favourites" exact render={() => <Favourites />} />
          <Route path="/favourite/:id" exact render={({ match }) => <Favourites match={match} />} />
        </div>
      </div>
    </Router>
  );
}

export default App;
