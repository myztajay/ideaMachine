import React, { Component } from 'react';
import Home from './components/Home'
import Projects from './components/Projects'
import Nav from './components/Nav'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/projects" component={Projects} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
