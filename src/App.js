import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Header/Navigation';
import Home from './components/Main/Home';
import AddHabit from './components/Main/AddHabit';

class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <header>
            <Navbar />
          </header>

          <main>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/add" component={AddHabit} exact />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
