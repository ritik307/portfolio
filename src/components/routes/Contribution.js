import React from "react";
import { Header, Item } from "semantic-ui-react";
import circuitVerse from "../../images/contribution/circuitVerse1.png";
import fossasia from "../../images/contribution/fossasia.png";
import eddiehub from "../../images/contribution/eddiehub2.jpg";
import semanticui from "../../images/contribution/semantic.png";
import hacktoberfest from "../../images/contribution/hacktober.jpeg";
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

// custom styling
import { NoComputerImg } from "../dark-mode/styles";
// navbar
import Navbar from "../navbar/Navbar";
// footer
import Footer from "../dark-mode/Footer";
// dark mode toggler
import Toggler from "../dark-mode/Toggler";

class Contribution extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images:[circuitVerse,fossasia,semanticui,eddiehub,hacktoberfest],
      contributionData: [
        {
          id: 0,
          name: "Circuit Verse",
          date: "Oct 2020-Dec 2020",
          desc:
            "Created an issue #503 and also made a PR #508 in the Interactive Book repository.",
          
          github: "https://github.com/ritik307/OnlyMeal",
          site: " https://circuitverse.org/ ",
        },
        {
          id: 1,
          name: "Fossasia",
          date: "Dec 2020-Jan 2020",
          desc:
            `Created an issue #6587 in the open-event-frontend repository.`,
          
          github: "https://github.com/ritik307/Psychic-Doodle",
          site: "https://fossasia.org/",
        },
        {
          id: 2,
          name: "Semantic UI",
          date: "Sept 2020-Oct 2020",
          desc:
            "Created an issue #4150 in the Semantic-UI-React repository.",
          
          github: "https://github.com/ritik307/Captcha-IMHUMAN",
          site: "https://semantic-ui.com/",
        },
        {
          id: 3,
          name: "EddieHub",
          date: "Apr 2020-May 2020",
          desc:
            "Created an issue #237 and also made a PR #238 in the Awesome github profiles repository.",
          
          github: "https://github.com/ritik307/Paradise",
          site: "https://github.com/EddieHubCommunity/awesome-github-profiles",
        },
        {
          id: 4,
          name: "Hacktoberfest 2020",
          date: "Apr 2020-May 2020",
          desc:
            "Participated in Hacktoberfest 2020 and got merged more than 4 PRs successfully.",
          
          github: "https://github.com/ritik307/Paradise",
          site: "https://github.com/EddieHubCommunity/awesome-github-profiles",
        },
      ],
    };
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
    let cardList = this.state.contributionData.map((data) => {
      return (
        <Card raised color="blue">
          <Item.Group divided>
            <Item>
              <Item.Content>
                <CardHeader>
                  <Item.Header>{data.name}</Item.Header>
                </CardHeader>
                <Item.Meta>
                  {/* <CardSubHeader>Jun2020-July2020</CardSubHeader> */}
                </Item.Meta>
                <Item.Description>
                  <CardText>
                    {data.desc}
                  </CardText>
                  {/* <div className="icons">
                    <a href={data.github}>
                      <CardIcon name="github"></CardIcon>
                    </a>
                    <a href={data.site}>
                      <CardIcon name="globe"></CardIcon>
                    </a>
                  </div> */}
                </Item.Description>
              </Item.Content>
              <NoComputerImg size="tiny" src={this.state.images[data.id]}></NoComputerImg>
            </Item>
          </Item.Group>
        </Card>
      );
    });
    return (
      <Holder>
        <div className="home">
          <div className="header">
            <Header as="h1">
              <Heading>
                Open Source
                <Toggler changeTheme={this.changeTheme} />
              </Heading>
            </Header>
            <Hr />
          </div>
          {/* <hr/> */}
          {cardList}
          <Footer />
        </div>
        <Navbar theme={this.props.theme} />
      </Holder>
    );
  }
}

export default Contribution;
