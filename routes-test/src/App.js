import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Movie from "./Movie";



function App() {
  return <Router>
    <Switch>
      <Route path="/movie">
        <Movie />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
}

export default App;
