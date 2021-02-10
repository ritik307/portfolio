import React, { createRef } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// Semantic ui
import { Grid, Sticky } from "semantic-ui-react";
// custom
import Home from "./components/routes/Home";

import Education from "./components/routes/Education";
import Workx from "./components/routes/Workx";
class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/education" exact component={Education} />
          <Route path="/workx" exact component={Workx} />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
