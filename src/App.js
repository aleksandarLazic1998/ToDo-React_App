import "./App.css";
import Navigation from "./components/Navigation";
import HomeComponent from "./components/navComponents/HomeComponent";
import AboutComponent from "./components/navComponents/AboutComponent";
import ContactComponent from "./components/navComponents/ContactComponent";
import NotFound from "./components/navComponents/NotFound";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          {/* Home Page Route */}
          <Route exact path="/">
            <HomeComponent />
          </Route>
          {/* About Page Route */}
          <Route path="/about">
            <AboutComponent />
          </Route>
          {/* Contact Page Route */}
          <Route path="/contact">
            <ContactComponent />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
