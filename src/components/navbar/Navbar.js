import React from "react";

import { Menu } from "semantic-ui-react";
import {NavStyle,NavBarMenu,IconLink} from "./styles.js"
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
import { RiOpenSourceFill} from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { IconContext } from "react-icons";



class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    console.log("from navbar: ",props.theme);
  }
  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <NavStyle>
        <NavBarMenu icon="labeled" fixed="bottom" fluid widths={5}>

          <Menu.Item
            name="project"
            active={activeItem === "project"}
            onClick={this.handleItemClick}
          >
            <IconLink to="/">
              <IconContext.Provider
                value={{ className: "ico1", size: "2em" }}
              >
                <FaCode/>
                {/* <IconTag>
                  Projects
                </IconTag> */}
                
              </IconContext.Provider>
            </IconLink>
          </Menu.Item>

          <Menu.Item
            name="education"
            active={activeItem === "education"}
            onClick={this.handleItemClick}
          >
            <IconLink to="/education">
              <IconContext.Provider
                value={{ className: "ico1", size: "2em" }}
              >
                <FaUserGraduate/>
                {/* <IconTag>
                  Education
                </IconTag> */}
              </IconContext.Provider>
            </IconLink>
          </Menu.Item>

          <Menu.Item
            name="workx"
            active={activeItem === "workx"}
            onClick={this.handleItemClick}
          >
            <IconLink to="/workx">
              <IconContext.Provider
                value={{ className: "ico1", size: "2em" }}
              >
                <FaEdit/>
                {/* <IconTag>
                  Work Ex.
                </IconTag> */}
              </IconContext.Provider>
            </IconLink>
          </Menu.Item>
          
          <Menu.Item
            name="about"
            active={activeItem === "about"}
            onClick={this.handleItemClick}
          >
            <IconLink to="/about">
              <IconContext.Provider
                value={{ className: "ico1", size: "2em" }}
              >
                <FaUserTie/>
                {/* <IconTag>
                  About
                </IconTag> */}
              </IconContext.Provider>
            </IconLink>
          </Menu.Item>

          <Menu.Item
            name="contribution"
            active={activeItem === "contribution"}
            onClick={this.handleItemClick}
          >
            <IconLink to="/contribution">
              <IconContext.Provider
                value={{ className: "ico1", size: "2em" }}
              >
                <RiOpenSourceFill/>
                {/* <IconTag>
                  Contribution
                </IconTag> */}
              </IconContext.Provider>
            </IconLink>
          </Menu.Item>

        </NavBarMenu>
      </NavStyle>
    );
  }
}
export default Navbar;
