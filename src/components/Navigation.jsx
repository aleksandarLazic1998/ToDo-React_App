import React from "react";
import HomeComponent from "./navComponents/HomeComponent";
import AboutComponent from "./navComponents/AboutComponent";
import ContactComponent from "./navComponents/ContactComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Navigation = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" >
            <HomeComponent />
          </Route>
          <Route path="/about" >
            <AboutComponent />
          </Route>
          <Route path="/contact">
            <ContactComponent  />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Navigation;
