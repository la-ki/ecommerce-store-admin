import React, {useEffect} from "react";
import {Route, Switch} from 'react-router-dom';
import "./App.css";
import Home from './containers/Home';
import Login from './containers/Login';
import Signup from "./containers/Signup";
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch, useSelector } from "react-redux";
import {isUserLoggedIn} from './actions';
import Products from './containers/Products';
import Orders from './containers/Orders';

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
}, []);

  return (
    <div className="App">
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/products" exact component={Products} />
          <PrivateRoute path="/orders" exact component={Orders} />

          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </Switch>
    </div>
  );
}

export default App;
