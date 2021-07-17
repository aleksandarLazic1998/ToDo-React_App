import "./App.css";
import Navigation from "./components/Navigation";

import HomeComponent from "./navComponents/HomeComponent";
import AboutComponent from "./navComponents/AboutComponent";
import ContactComponent from "./navComponents/ContactComponent";

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
