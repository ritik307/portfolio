import React from "react";

import { Route, BrowserRouter as Router } from "react-router-dom";
// custom
import Home from "./routes/Home";
import Education from "./routes/Education";
import Workx from "./routes/Workx";
import About from "./routes/About";
// react sidebar
import Sidebar from "react-sidebar";
import SidebarContent from "./routes/SidebarContent";

// sidebar styles
import {styles} from "./sidebar-styling/styles";
//local storage
import storage from "local-storage-fallback";
// styled-components
import styled, { ThemeProvider } from "styled-components";
import {DarkTheme,LightTheme} from "./dark-mode/Theme";


const themes={
  dark:DarkTheme,
  light:LightTheme
}

const mql = window.matchMedia(`(min-width: 800px)`);

//sidebar style


class App extends React.Component {
  // Sidebar content
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false,
      theme: "light"
    };
    
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }
  handleChange=(currTheme)=>{
    this.setState({theme:currTheme});
    console.log("the state is : ",this.state.theme);
  }
  render() {
    return (
      <ThemeProvider theme={themes[this.state.theme]}>
          {console.log("themeproviders: ",themes[this.state.theme])}
          <Router>
            <Sidebar
              sidebar={<SidebarContent />}
              styles={styles}
              open={this.state.sidebarOpen}
              docked={this.state.sidebarDocked}
              onSetOpen={this.onSetSidebarOpen}
            >
              {/* <MainSec> */}
                <Route path="/" exact component={Home} />
                <Route path="/education" exact component={Education} />
                <Route path="/workx" exact component={Workx} />
                <Route path="/about" exact component={()=><About theme={themes[this.state.theme]} handleChange={this.handleChange}/>} />
              
              {/* </MainSec> */}

            </Sidebar>
            
          </Router>
        
      </ThemeProvider>
    );
  }
}
export default App;
