import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import MovieInfo from "./routes/MovieInfo";
import Detail from "./routes/Detail";

function MakeRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/movie">
          <Detail />
        </Route>
        <Route path="/">
          <MovieInfo />
        </Route>
      </Switch>
    </Router>
  );
}

export default MakeRouter;
