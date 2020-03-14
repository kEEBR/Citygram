import React from "react";
import MainPage from "./components/MainPage";
import About from "./components/About";
import NewsMap from "./components/NewsMap";
import { BrowserRouter as Router, Route } from "react-router-dom";
interface State {
  hasError: boolean;
}

class App extends React.Component<any, State> {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <div id="main">
          <Router>
            <Route exact path="/Main" component={MainPage} />
            <Route path="/About" component={About} />
            <Route path="/NewsMap" component={NewsMap} />
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
