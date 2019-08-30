import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import characters from '../containers/characters';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/redux-avatar-promise" component={characters} />
        <Route />
      </Switch>
    </Router>
  );
}
  
