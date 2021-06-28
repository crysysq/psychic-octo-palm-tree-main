import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
