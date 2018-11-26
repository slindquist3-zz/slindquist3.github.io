import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'
import View1 from './components/view1'
import View2 from './components/view2'
import './index.scss';

const routing = (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/view1">About</Link>
        </li>
        <li>
          <Link to="/view2">Work</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/About" component={View1} />
      <Route path="/Work" component={View2} />
    </nav>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'))
