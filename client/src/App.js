import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SearchBooks from "./pages/SearchBooks";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          {/* <Route exact path = "/books" component={Books}/>
          <Route exact path = "/books/:id" component={Detail} />
          <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
