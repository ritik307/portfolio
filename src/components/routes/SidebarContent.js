import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCode,
  FaUserGraduate,
  FaEdit,
  FaUserTie,
} from "react-icons/fa";
import { RiOpenSourceFill, RiMailStarFill } from "react-icons/ri";

import styled from "styled-components";

import { IconContext } from "react-icons";
// Typewriting effect
import Typewriter from "typewriter-effect";
//Semantic ui
import {Header,Image,Popup,} from "semantic-ui-react";
//CSS
import "../../css/master.css";
// Image
import profile from "../../images/profile.jpg";
import profile1 from "../../images/me2.jpg";

const NoMobileDiv = styled.div`
  @media (max-width: 800px) {
    display: none !important;
  }
`;

class SidebarContent extends React.Component {
  constructor() {
    super();
    this.state = {
      isDarkMode: false,
    };
  }

  toggleButton = () => {
    this.setState({
      isDarkMode: this.state.isDarkMode === true ? false : true,
    });
  };
  render() {
    return (
      // <NoMobileDiv>
      <div className="sidebar">
        {/* <Container > */}
        <Image src={profile} size="small" circular centered></Image>
        <Header as="h2" textAlign="center" className="header">
          Ritik Rawal
          <Header.Subheader className="header">
            <Typewriter
              options={{
                strings: [
                  "Full Stack Web Developer",
                  "Opensource Enthusiast",
                  "And a wholesome senpai",
                ],
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter.pauseFor(1000).deleteAll().start();
              }}
            />
          </Header.Subheader>
        </Header>

        <div className="menu1">
          <a href="https://github.com/ritik307">
            <IconContext.Provider value={{ className: "ico1" }}>
              <Popup
                content="ritik307"
                size="mini"
                position="bottom center"
                trigger={<FaGithub />}
              />
            </IconContext.Provider>
          </a>
          <a href="https://www.linkedin.com/in/ritik-rawal-698a18142/">
            <IconContext.Provider value={{ className: "ico1" }}>
              <Popup
                content="Ritik Rawal"
                size="mini"
                position="bottom center"
                trigger={<FaLinkedin />}
              />
            </IconContext.Provider>
          </a>
          <a href="https://twitter.com/realwolf307">
            <IconContext.Provider value={{ className: "ico1" }}>
              <Popup
                content="@ritikhere307"
                size="mini"
                position="bottom center"
                trigger={<FaTwitter />}
              />
            </IconContext.Provider>
          </a>
          {/* <a href="U01NGG1LGFJ">
                  <Icon name="slack" className="ico"></Icon>
                </a> */}
        </div>
        <div className="menu2">
          <Link to="/">
            <IconContext.Provider value={{ className: "ico1", size: "1.2em" }}>
              <Popup
                content="Projects"
                size="mini"
                position="bottom center"
                trigger={<FaCode />}
              />
            </IconContext.Provider>
          </Link>
          <Link to="/contribution">
            <IconContext.Provider value={{ className: "ico1", size: "1.2em" }}>
              <Popup
                content="OpenSource "
                size="mini"
                position="bottom center"
                trigger={<RiOpenSourceFill />}
              />
            </IconContext.Provider>
          </Link>
          <Link to="/education">
            <IconContext.Provider value={{ className: "ico1", size: "1.1em" }}>
              <Popup
                content="Education"
                size="mini"
                position="bottom center"
                trigger={<FaUserGraduate />}
              />
            </IconContext.Provider>
          </Link>

          <Link to="/workx">
            <IconContext.Provider value={{ className: "ico1", size: "1.2em" }}>
              <Popup
                content="Work Experience"
                size="mini"
                position="bottom center"
                trigger={<FaEdit />}
              />
            </IconContext.Provider>
          </Link>
          <Link to="/about">
            <IconContext.Provider value={{ className: "ico1", size: "1.1em" }}>
              <Popup
                content="About"
                size="mini"
                position="bottom center"
                trigger={<FaUserTie />}
              />
            </IconContext.Provider>
          </Link>
          
          {/* <br/> */}
          <a href="mailto:ritikpr307@gmail.com">
            <IconContext.Provider value={{ className: "ico1", size: "1.2em" }}>
              <Popup
                content="ritikpr307@gmail.com"
                size="mini"
                position="bottom center"
                trigger={<RiMailStarFill />}
              />
            </IconContext.Provider>
          </a>
        </div>
        {/* </Container> */}
      </div>
      // </NoMobileDiv>
    );
  }
}

export default SidebarContent;
