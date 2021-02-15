import React from "react";

import { Route,BrowserRouter as Router } from 'react-router-dom'
// custom
import Home from "./routes/Home";
import Education from "./routes/Education";
import Workx from "./routes/Workx";
import About from "./routes/About";
// react sidebar
import Sidebar from "react-sidebar";
import SidebarContent from  "./routes/SidebarContent";
// Image
import sidebarbg2 from "../images/sidebarbg2.jpg";
//local storage
import storage from "local-storage-fallback";
//styled components
import {ThemeProvider,createGlobalStyle} from "styled-components";

const mql = window.matchMedia(`(min-width: 800px)`);


//sidebar style
let styles={
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden"
  },
  sidebar: {
    width: 500,
    height: "100%",
    backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.6)),url(${sidebarbg2})` ,
    backgroundSize:"cover",
    backgroundPosition:"center",
  },
  content: {
    padding: "16px",
    height: "100%",
    backgroundColor: "white"
  },
  overlay: {
    zIndex: 1,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    visibility: "hidden",
    transition: "opacity .3s ease-out, visibility .3s ease-out",
    backgroundColor: "rgba(0,0,0,.3)"
  },
  dragHandle: {
    zIndex: 1,
    position: "fixed",
    top: 0,
    bottom: 0
  }
}
//GlobalStyle
// const GlobalStyle = createGlobalStyle`
// body{
//   background-color: ${props=>
//     props.theme.mode === 'dark' ? '#000000 !important' : '#EEE !important'};
//   color: ${props=>
//     props.theme.mode === 'dark' ? '#EEE' : '#000000'};
// }
// `;

//getting value from the local storage of the browser

// function getInitialTheme(){
//   const savedTheme = storage.getItem('theme');
//   console.log("saved theme: ",savedTheme);
//   return savedTheme ? JSON.parse(savedTheme) : {mode: 'light'}
// }

class App extends React.Component {
  // Sidebar content
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false,
      // theme: getInitialTheme()
    };
    console.log("theme is ",this.state.theme);
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  // componentDidMount(){
  //   console.log("cdm theme : ",this.state.theme);  
  //   storage.setItem('theme',JSON.stringify(this.state.theme));
  // }
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

  render() {
    return (
      <div>
        {/* <ThemeProvider theme={{mode:"dark"}}>
          <>
            <GlobalStyle/> */}
            <Router >
              <Sidebar
                sidebar={
                  <SidebarContent/>
                }
                styles={styles}
                open={this.state.sidebarOpen}
                docked={this.state.sidebarDocked}
                onSetOpen={this.onSetSidebarOpen}
              >
                
                  <Route path="/" exact component={Home} />
                  <Route path="/education" exact component={Education} />
                  <Route path="/workx" exact component={Workx} />
                  <Route path="/about" exact component={About} />
                
              </Sidebar>
            </Router>
          {/* </>
        </ThemeProvider> */}
        
        
      </div>
    );
  }
}
export default App;
