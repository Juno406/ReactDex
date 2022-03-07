import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import backgroundImage from './assets/pattern.png';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';
import SearchBar from './components/search/SearchBar';
import Pokemon from './components/pokemon/Pokemon';
import NotFound from './Not Found';

class App extends Component {
  render() {

    return (
      <Router>
        <div className="App" style={{ background: `url(${backgroundImage})` }}>
          <SearchBar/>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;