import React from "react";

import { Route, BrowserRouter as Router, Link } from "react-router-dom";
// custom
import Home from "./routes/Home";
import Education from "./routes/Education";
import Workx from "./routes/Workx";
import About from "./routes/About";
import Contribution from "./routes/Contribution";
// react sidebar
import Sidebar from "react-sidebar";
import SidebarContent from "./routes/SidebarContent";
// sidebar styles
import { styles } from "./sidebar-styling/styles";
//local storage
import storage from "local-storage-fallback";
// styled-components
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./dark-mode/Theme";
import { Grid, GridColumn, Menu } from "semantic-ui-react";

const themes = {
  dark: DarkTheme,
  light: LightTheme,
};

const mql = window.matchMedia(`(min-width: 991px)`);

class App extends React.Component {
  // Sidebar content
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false,
      theme: "light",
      
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  
  componentDidMount() {
    mql.addListener(this.mediaQueryChanged);
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? this.setState({ theme: localTheme }) : this.setMode("light");
  }
  setMode = (localTheme) => {
    window.localStorage.setItem("theme", localTheme);
    this.setState({ theme: localTheme });
  };
  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }
  handleChange = (currTheme) => {
    // this.setState({theme:currTheme});
    this.setMode(currTheme);
    console.log("the state is : ", this.state.theme);
  };
  render() {
    
    return (
      <ThemeProvider theme={themes[this.state.theme]}>
        {console.log("themeproviders: ", themes[this.state.theme])}

        
          <Router>
           
            <Sidebar
              sidebar={<SidebarContent />}
              styles={styles}
              open={this.state.sidebarOpen}
              docked={this.state.sidebarDocked}
              onSetOpen={this.onSetSidebarOpen}
            >
              <Route
                path="/portfolio/"
                exact
                component={() => (
                  <Home
                    theme={themes[this.state.theme]}
                    handleChange={this.handleChange}
                  />
                )}
              />
              <Route
                path="/portfolio/education"
                exact
                component={() => (
                  <Education
                    theme={themes[this.state.theme]}
                    handleChange={this.handleChange}
                  />
                )}
              />
              <Route
                path="/portfolio/workx"
                exact
                component={() => (
                  <Workx
                    theme={themes[this.state.theme]}
                    handleChange={this.handleChange}
                  />
                )}
              />
              <Route
                path="/portfolio/about"
                exact
                component={() => (
                  <About
                    theme={themes[this.state.theme]}
                    handleChange={this.handleChange}
                  />
                )}
              />
              <Route
                path="/portfolio/contribution"
                exact
                component={() => (
                  <Contribution
                    theme={themes[this.state.theme]}
                    handleChange={this.handleChange}
                  />
                )}
              />
            </Sidebar>
          </Router>
      </ThemeProvider>
    );
  }
}
export default App;
