import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GroupCreate from "./pages/GroupCreate";
import Home from "./pages/Home";
import Groups from "./pages/Groups";
import Group from "./pages/Group";
import Transaction from "./pages/Transaction";
import NotFound from "./pages/NotFound";
import Header from "./pages/Header";
import Dashboard from "./pages/Dashboard";

function App() {

  return (< BrowserRouter >
    <Switch >
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/groups/" exact component={Groups} />
      <Route path="/groups/create" exact component={GroupCreate} />
      <Route path="/groups/:id" exact component={Group} />
      <Route path="/transaction/create" exact component={Transaction} />
      <Route path="/Header" exact component={Header} />
      <Route component={NotFound} />
    </Switch > </BrowserRouter>
  );
}

export default App;