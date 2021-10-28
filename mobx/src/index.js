import React from 'react';
import ReactDOM from 'react-dom';
import lodash from 'lodash';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

// import './components/react-hook/index.css';

console.log(lodash.VERSION);

const App = () => (<div>
  <Router>
    <Link to="/demo0">TodoAppObject</Link> <br/>
    <hr/>
    <Switch>
      <Route path="/demo0">
        <h1>Mobx</h1>
        {/* <TodoAppObject /> */}
      </Route>
    </Switch>
  </Router>
</div>)

ReactDOM.render(<App />, document.querySelector('#root'));
