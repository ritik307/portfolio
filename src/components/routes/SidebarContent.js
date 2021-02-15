import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
// Typewriting effect
import Typewriter from "typewriter-effect";
//Semantic ui
import {
  Container,
  Grid,
  GridColumn,
  Header,
  Icon,
  Image,
} from "semantic-ui-react";
//CSS
import "../../css/master.css";
// Image
import profile from "../../images/profile.jpg";
class SidebarContent extends React.Component {
  render() {
    return (
      <div>
        <div className="sidebar">
          {/* <Container > */}
          <Image src={profile} size="small" circular centered></Image>
          <Header as="h2" textAlign="center" className="header">
            Ritik Rawal
            <Header.Subheader className="header">
              <Typewriter
                options={{
                  strings:["Full Stack Web Developer","Opensource Enthusiast","And a wholesome senpai"],
                  autoStart:true,
                  loop:true
                }}
                onInit={
                  (typewriter)=>{
                  typewriter
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
                }}
              />
              
            </Header.Subheader>
          </Header>
          <div className="menu1">
            <a href="https://github.com/ritik307">
              <Icon name="github" className="ico1"></Icon>
            </a>
            <a href="https://www.linkedin.com/in/ritik-rawal-698a18142/">
              <Icon name="linkedin" className="ico1"></Icon>
            </a>
            <a href="https://twitter.com/realwolf307">
              <Icon name="twitter" className="ico1"></Icon>
            </a>
            {/* <a href="U01NGG1LGFJ">
                  <Icon name="slack" className="ico"></Icon>
                </a> */}
          </div>
          <div className="menu2">
            <Link to="/">
              <Icon name="code" className="ico2"></Icon>
            </Link>
            <Link to="/education">
              <Icon name="book" className="ico2"></Icon>
            </Link>
            
            <Link to="/workx">
              <Icon name="edit" className="ico2"></Icon>
            </Link>
            <Link to="/about">
              <Icon name="user" className="ico2"></Icon>
            </Link>
            {/* <br/> */}
            <a href="mailto:ritikpr307@gmail.com">
              <Icon name="mail" className="ico2"></Icon>
            </a>
            
          </div>
          {/* </Container> */}
        </div>
      </div>
    );
  }
}

export default SidebarContent;
