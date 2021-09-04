import Register from "../src/components/register/register";
import "./App.css";
import Login from "./components/login/login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact={true} path="/" render={() => <Login />} />
          <Route exact={true} path="/register" render={() => <Register />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
