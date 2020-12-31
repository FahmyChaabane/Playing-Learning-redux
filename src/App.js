import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Feed from "./components/feed";
import Bug from "./components/bug";
import BugForm from "./components/bugForm";
import NavBar from "./components/navBar";
import NotFoundPage from "./components/notFoundPage";
import store from "./store/store";
import "./App.css";
import { ADD_BUG } from "./reducers/bugs";
import { v4 as uuid4 } from "uuid";

store.dispatch(
  ADD_BUG({
    id: uuid4(),
    title: "User cannot be added",
    description: "View email changes 10/25",
    category: "High",
    resolved: false,
  })
);
store.subscribe(() => console.log("store"));
store.dispatch(
  ADD_BUG({
    id: uuid4(),
    title: "Form design to be fixed",
    description: "View email changes 10/25",
    category: "Low",
    resolved: false,
  })
);

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/bug/form/:id?" component={BugForm} />
        <Route path="/bug/:id" component={Bug} />
        <Route path="/feed" exact component={Feed} />
        <Route path="/NotFoundPage" component={NotFoundPage} />
        <Redirect exact from="/" to="/feed" />
        <Redirect to="/NotFoundPage" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
