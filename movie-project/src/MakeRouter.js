import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import MovieInfo from "./routes/MovieInfo";
import Detail from "./routes/Detail";

function MakeRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          {/* :id => :를 사용함으로써
         id 에 1, 2, 3 ... 같은 여러 숫자 사용가능 */}
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
