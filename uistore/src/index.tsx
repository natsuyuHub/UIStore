import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom"
import './index.css';
import Menu from './Menu';
import Home from './Home';
import Button from './Button';
import List from './List';
import Item from './Item';
import Box from './Box';
import Form from './Form';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <BrowserRouter>
    <div className="container">
      <Menu />
      <div className="contents">
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/button"><Button /></Route>
          <Route exact path="/list"><List /></Route>
          <Route exact path="/item"><Item /></Route>
          <Route exact path="/box"><Box /></Route>
          <Route exact path="/form"><Form /></Route>
        </Switch>
      </div>
    </div>
    </BrowserRouter>,
    document.getElementById('root')
);
reportWebVitals();
