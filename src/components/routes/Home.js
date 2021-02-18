import React from "react";
import { Grid, Header, Icon, Item, Segment } from "semantic-ui-react";
import Chart from "../Chart";
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
// dark mode toggler
import Toggler from "../dark-mode/Toggler";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
    };
  }
  componentWillMount() {
    this.getChartData();
  }
  getChartData() {
    this.setState({
      chartData: {
        labels: ["", "Javascript", "HTML", "CSS"],
        datasets: [
          {
            label: "Most used languages",
            data: [0, 13, 12, 15],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
            ],
          },
        ],
      },
    });
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
      <div>
        <Navbar />
        <Holder>
          <div className="home">
            <div className="header">
              <Header as="h1">
                <Heading>
                  Project
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
                      <Item.Header>Project 01</Item.Header>
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
                  <Chart
                    className="chart"
                    type="1"
                    chartData={this.state.chartData}
                    displayTitle={false}
                  />
                </Item>
              </Item.Group>
            </Card>
            <Card raised color="blue">
              <Item.Group divided>
                <Item>
                  <Item.Content>
                    <CardHeader>
                      <Item.Header>Project 02</Item.Header>
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
                  <Chart
                    className="chart"
                    type="1"
                    chartData={this.state.chartData}
                    displayTitle={false}
                  />
                </Item>
              </Item.Group>
            </Card>
          </div>
        </Holder>
      </div>
    );
  }
}

export default Home;
