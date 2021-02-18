import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import styled from "styled-components";
// icons
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCode,
  FaUserGraduate,
  FaEdit,
  FaUserTie,
  GrMail,
} from "react-icons/fa";
//CSS
import "../../css/master.css";
//Icons
import { RiOpenSourceFill, RiMailStarFill } from "react-icons/ri";
import { IconContext } from "react-icons";
const NoComputerDiv = styled.div`
  @media (min-width: 800px) {
    display: none !important;
  }
`;

class Navbar extends React.Component {
  state = {};
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <NoComputerDiv>
        <Menu icon fixed="bottom" fluid widths={5}>

          <Menu.Item
            name="project"
            active={activeItem === "project"}
            onClick={this.handleItemClick}
          >
            <Link to="/">
              <IconContext.Provider
                value={{ className: "ico1", size: "2em", color:"black" }}
              >
                <FaCode/>
              </IconContext.Provider>
            </Link>
          </Menu.Item>

          <Menu.Item
            name="education"
            active={activeItem === "education"}
            onClick={this.handleItemClick}
          >
            <Link to="/education">
              <IconContext.Provider
                value={{ className: "ico1", size: "2em", color:"black" }}
              >
                <FaUserGraduate/>
              </IconContext.Provider>
            </Link>
          </Menu.Item>

          <Menu.Item
            name="workx"
            active={activeItem === "workx"}
            onClick={this.handleItemClick}
          >
            <Link to="/workx">
              <IconContext.Provider
                value={{ className: "ico1", size: "2em", color:"black" }}
              >
                <FaEdit/>
              </IconContext.Provider>
            </Link>
          </Menu.Item>
          
          <Menu.Item
            name="about"
            active={activeItem === "about"}
            onClick={this.handleItemClick}
          >
            <Link to="/about">
              <IconContext.Provider
                value={{ className: "ico1", size: "2em", color:"black" }}
              >
                <FaUserTie/>
              </IconContext.Provider>
            </Link>
          </Menu.Item>

          <Menu.Item
            name="contribution"
            active={activeItem === "contribution"}
            onClick={this.handleItemClick}
          >
            <Link to="/contribution">
              <IconContext.Provider
                value={{ className: "ico1", size: "2em", color:"black" }}
              >
                <RiOpenSourceFill/>
              </IconContext.Provider>
            </Link>
          </Menu.Item>

          
        </Menu>
      </NoComputerDiv>
    );
  }
}
export default Navbar;
