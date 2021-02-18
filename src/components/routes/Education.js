import React from "react";
import { Grid, Header, Icon, Item, Segment } from "semantic-ui-react";
//icons
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IconContext } from "react-icons";
// Styles
import {
  Holder,
  Heading,
  Span,
  Hr,
  Card,
  CardText,
  CardHeader,
  CardSubHeader,
  CardIcon,
  CompFooter,
  MobFooter,
  FooterLink,
} from "../dark-mode/styles";
// navbar
import Navbar from "../navbar/Navbar";
// dark mode toggler
import Toggler from "../dark-mode/Toggler";

class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  changeTheme = () => {
    if (this.props.theme.name === "light") {
      console.log("theme is : ", this.props.theme);
      this.props.handleChange("dark");
      console.log("theme elements :", this.props.theme.body);
    } else {
      this.props.handleChange("light");
    }
  };
  render() {
    return (
      <Holder>
        <div className="home">
          <div className="header">
            <Header as="h1">
              <Heading>
                Education
                <Toggler changeTheme={this.changeTheme} />
              </Heading>
            </Header>
            <Hr />
          </div>
          {/* <hr/> */}

          <Card raised color="blue">
            <Item.Group divided>
              <Item>
                <Item.Content>
                  <CardHeader>
                    <Item.Header>Post Graduation</Item.Header>
                  </CardHeader>
                  <Item.Meta>
                    <CardSubHeader>Jun2020-July2020</CardSubHeader>
                  </Item.Meta>
                  <Item.Description>
                    <CardText>
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                    </CardText>
                    <div className="icons">
                      <a href="https://github.com/Samridhi-98">
                        <CardIcon name="github"></CardIcon>
                      </a>
                      <a href="https://www.linkedin.com/in/samridhi-agrawal-1713201ab/">
                        <CardIcon name="globe"></CardIcon>
                      </a>
                    </div>
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Card>
          <Card raised color="blue">
            <Item.Group divided>
              <Item>
                <Item.Content>
                  <CardHeader>
                    <Item.Header>Undergraduation</Item.Header>
                  </CardHeader>
                  <Item.Meta>
                    <CardSubHeader>Jun2020-July2020</CardSubHeader>
                  </Item.Meta>
                  <Item.Description>
                    <CardText>
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                    </CardText>
                    <div className="icons">
                      <a href="https://github.com/Samridhi-98">
                        <CardIcon name="github"></CardIcon>
                      </a>
                      <a href="https://www.linkedin.com/in/samridhi-agrawal-1713201ab/">
                        <CardIcon name="globe"></CardIcon>
                      </a>
                    </div>
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Card>
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
        <Navbar theme={this.props.theme}/>
      </Holder>
    );
  }
}

export default Education;
