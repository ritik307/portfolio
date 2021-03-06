import React from "react";

import { Header, Item } from "semantic-ui-react";

import Chart from "../Chart";
// Styles
import {
  Holder,
  Heading,
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
import Footer from "../dark-mode/Footer";
// dark mode toggler
import Toggler from "../dark-mode/Toggler";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
      feedData: [
        {lang1:"Javascript", lang2:"HTML", lang3:"CSS", l1: 100, l2: 0, l3: 0 },
        {lang1:"Javascript", lang2:"HTML", lang3:"CSS", l1: 89.9, l2: 47.9, l3: 22.2 },
        {lang1:"Javascript", lang2:"HTML", lang3:"CSS", l1: 99.9, l2: 20, l3: 10 },
        {lang1:"Javascript", lang2:"HTML", lang3:"CSS", l1: 83.1, l2: 39.1, l3: 15.7 },
        {lang1:"Javascript", lang2:"HTML", lang3:"CSS", l1: 61.9, l2: 30.6, l3: 7.5 },
        {lang1:"Javascript", lang2:"HTML", lang3:"CSS", l1: 28.2, l2: 85.1, l3: 16.7 },
      ],
      projectData: [
        {
          id:0,
          name: "Rapid-JS",
          date: "Oct 2020-Dec 2020",
          desc: "To overcome the problem of food wastage, Onlymeal provides a two way interaction between those with a food surplus and those looking for food. The data collected from this app includes nature of the food, date of expiry, location etc. This data when aggregated can be very useful for NGOs to connect the locations with surplus with those that are in need of the food.",
          github:"https://github.com/ritik307/Rapid-NPM-Package",
          site:" https://www.npmjs.com/package/rapid-npm-package "
        },
        {
          id:1,
          name: "OnlyMeal",
          date: "Oct 2020-Dec 2020",
          desc: "To overcome the problem of food wastage, Onlymeal provides a two way interaction between those with a food surplus and those looking for food. The data collected from this app includes nature of the food, date of expiry, location etc. This data when aggregated can be very useful for NGOs to connect the locations with surplus with those that are in need of the food.",
          github:"https://github.com/ritik307/OnlyMeal",
          site:" onlymeal.herokuapp.com "
        },
        {
          id:2,
          name: "Psychic Doodle",
          date: "Dec 2020-Jan 2020",
          desc: "While studying one might want to draw on the same page in order to make others or self understand the concept in a deeper manner. It is a extension that allows user to doodle over the active web page. The user can doodle with different colours,shapes and strokes.",
          github:"https://github.com/ritik307/Psychic-Doodle",
          site:"/"
        },
        {
          id:3,
          name: "Captcha IMHUMAN",
          date: "Sept 2020-Oct 2020",
          desc: "Visually impaired citizens face a lot of problems with the CAPTCHA authentication process. In some of the applications OTP is given as an alternative but not with the rest of the apps. In some of the apps audio captcha is provided but many citizens find it difficult to decipher. To overcome this problem designed a CAPTCHA using environmental sounds.",
          github:"https://github.com/ritik307/Captcha-IMHUMAN",
          site:"https://captcha-imhuman.herokuapp.com/"
        },
        {
          id:4,
          name: "Paradise",
          date: "Apr 2020-May 2020",
          desc: "A blogging web Application that allowes user to post thier blogs. Application allows user to create their account. User can add comment to others post. Only registered users are allowed to post the content on the application. Registered users can edit/delete their post.",
          github:"https://github.com/ritik307/Paradise",
          site:"/"
        },
        {
          id:5,
          name: "toTheMoon",
          date: "May 2020-May 2020",
          desc: "toTheMoon is a link management platform that lets you harness the power of your links by shortening, sharing, managing and analyzing links to your content.",
          github:"https://github.com/ritik307/toTheMoon",
          site:"/"
        },
      ],
    };
  }
  componentWillMount() {
    this.getChartData();
  }
  getChartData() {
    let tempArray = [];
    this.state.feedData.map((vals) => {
      let chartVal = {
        cData: {
          labels: ["", vals.lang1, vals.lang2, vals.lang3],
          datasets: [
            {
              label: "Most used languages",
              data: [0, vals.l1, vals.l2, vals.l3],
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
      };
      
      tempArray = tempArray.concat(chartVal.cData);
    });
    console.log("temparray is : ", tempArray);
    // ! setState is a async function
    this.setState({ chartData: tempArray }, () => {
      console.log("chartData: ", this.state.chartData);
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
    let cardList = this.state.projectData.map((data) => {
      return(
      <Card raised color="blue">
        <Item.Group divided>
          <Item>
            <Item.Content>
              <CardHeader>
                <Item.Header>{data.name}</Item.Header>
                <CardSubHeader>{data.date}</CardSubHeader>
              </CardHeader>
              
              <Item.Description>
                <CardText>
                  {data.desc}
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
              chartData={this.state.chartData[data.id]}
              displayTitle={false}
            />
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
                Project
                <Toggler changeTheme={this.changeTheme} />
              </Heading>
            </Header>
            <Hr />
          </div>
          {cardList}
          <Footer />
        </div>
        <Navbar theme={this.props.theme} />
      </Holder>
    );
  }
}

export default Home;
