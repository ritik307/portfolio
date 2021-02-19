import React from "react";
//custom styling
import { CompFooter, MobFooter, FooterLink } from "./styles";
// icons
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IconContext } from "react-icons";

class Footer extends React.Component {
  render() {
    return(
      <div>
        <CompFooter>Made with ❤️ by Ritik</CompFooter>
        <MobFooter>
          <FooterLink href="https://github.com/ritik307">
            <IconContext.Provider value={{ className: "ico1" }}>
              <FaGithub />
            </IconContext.Provider>
          </FooterLink>
          <FooterLink href="https://www.linkedin.com/in/ritik-rawal-698a18142/">
            <IconContext.Provider value={{ className: "ico1" }}>
              <FaLinkedin />
            </IconContext.Provider>
          </FooterLink>
          <FooterLink href="https://twitter.com/realwolf307">
            <IconContext.Provider value={{ className: "ico1" }}>
              <FaTwitter />
            </IconContext.Provider>
          </FooterLink>
        </MobFooter>
      </div>
    );
  }
}
export default Footer;