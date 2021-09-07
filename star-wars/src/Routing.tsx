import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import People from './components/pages/People';
import Person from './components/pages/Person';
import NotFound from './components/pages/notFound';
import PrivateRoute from './components/PrivateRoute';

interface RoutingProps {
  isAuthenticated: boolean;
  signIn: () => void;
}

const Routing: React.FC<RoutingProps> = ({ isAuthenticated, signIn }) => {
  return (
    <Router>
      <Switch>
        <PrivateRoute isAuthenticated={isAuthenticated} path="/people">
          <People />
        </PrivateRoute>
        <Route path="/login">
          <Login signIn={signIn} />
        </Route>
        <PrivateRoute isAuthenticated={isAuthenticated} path="/person/:id">
          <Person />
        </PrivateRoute>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routing;
