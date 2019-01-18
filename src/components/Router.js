import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from './Button';

const Index = () => <h2>Home</h2>;
const New = () => <Button></Button>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new">About</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/new" component={About} />
    </div>
  </Router>
);

export default AppRouter;