import Register from "../src/components/register/register";
import "./App.css";
import Login from "./components/login/login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SnackbarProvider from "react-simple-snackbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact={true} path="/" render={() => <Login />} />
          <Route
            exact={true}
            path="/register"
            render={() => (
              <SnackbarProvider>
                <Register />
              </SnackbarProvider>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
