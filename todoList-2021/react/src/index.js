import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import TodoAppObject from './components/react-object/index.js';
import TodoAppHook from './components/react-hook/index.js';
import TodoAppRedux from './components/react-redux-saga/index.js';
import ReduceContext from './components/react-reduce-context';
import './components/react-hook/index.css';

const App = () => (<div>
  <Router>
    <Link to="/demo0">TodoAppObject</Link> <br/>
    <Link to="/demo1">TodoAppHook</Link> <br/>
    <Link to="/demo2">TodoAppRedux</Link> <br/>
    <Link to="/demo3">ReduceContext</Link> <br/>
    <hr/>
    <Switch>
      <Route path="/demo0">
        <h1>TodoAppObject</h1>
        <TodoAppObject />
      </Route>
      <Route path="/demo1">
        <h1>TodoAppHook</h1>
        <TodoAppHook />
      </Route>
      <Route path="/demo2">
        <h1>TodoAppRedux</h1>
        <TodoAppRedux />
      </Route>
      <Route path="/demo3">
        <h1>ReduceContext</h1>
        <ReduceContext />
      </Route>
    </Switch>
  </Router>
</div>)

ReactDOM.render(<App />, document.querySelector('#root'));
