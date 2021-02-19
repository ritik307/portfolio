import React from "react";
import { Header,  Item,} from "semantic-ui-react";

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
} from "../dark-mode/styles";
// navbar
import Navbar from "../navbar/Navbar";
// footer
import Footer from  "../dark-mode/Footer";
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
          <Footer/>
        </div>
        <Navbar theme={this.props.theme}/>
      </Holder>
    );
  }
}

export default Education;
