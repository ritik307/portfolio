import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// custom
import Home from "./components/routes/Home";
import Education from "./components/routes/Education";
import Workx from "./components/routes/Workx";
import Sidebar from "react-sidebar";
import SidebarContent from  "./components/routes/SidebarContent";
// Image
import sidebarbg from "./images/sidebarbg.jpg";


const mql = window.matchMedia(`(min-width: 800px)`);
let styles={
  
  sidebar: {
    // backgroundColor: "black",
    backgroundImage:`url(${sidebarbg})` ,
    backgroundSize:"cover",
    backgroundPosition:"center",
    width: "40%",
    
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: "auto",
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
    backgroundColor: "rgba(0,0,0,.3)",
  },
  dragHandle: {
    zIndex: 1,
    position: "fixed",
    top: 0,
    bottom: 0,
  },
}


class App extends React.Component {
  // Sidebar content
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false,
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

  render() {
    return (
      <div>
        <Sidebar
          sidebar={
            <SidebarContent/>
          }
          styles={styles}
          open={this.state.sidebarOpen}
          docked={this.state.sidebarDocked}
          onSetOpen={this.onSetSidebarOpen}
        >
          <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/education" exact component={Education} />
            <Route path="/workx" exact component={Workx} />
          </BrowserRouter>
        </Sidebar>
      </div>
    );
  }
}
export default App;
