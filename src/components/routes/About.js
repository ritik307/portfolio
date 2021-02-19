import React from "react";
import {
  
  Grid,
  Header,
  Segment,
} from "semantic-ui-react";

// dark mode toggler
import Toggler from "../dark-mode/Toggler";
// chart.js
import Chart from "../Chart";
// navbar
import Navbar from "../navbar/Navbar";
// footer
import Footer from  "../dark-mode/Footer";
// CSS
import "../../css/master.css";
import {
  Holder,
  Heading,
  Span,
  Hr,

} from "../dark-mode/styles";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      chartData1: {},
      chartData2: {},
    };
  }
  componentWillMount() {
    this.getChartData();
  }
  getChartData() {
    this.setState({
      chartData1: {
        labels: ["C++", "MongoDB", "Express", "React", "Nodejs"],
        datasets: [
          {
            label: "Most used languages",
            data: [20, 20, 20, 20, 20],
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
      chartData2: {
        labels: ["Problem Solving", "Team Work", "Multitasking", "Adaptation"],
        datasets: [
          {
            data: [20, 20, 20, 20],
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
      <Holder>
        <div className="about">
          <div className="header">
            <Header as="h1">
              <Heading>
                About
                <Toggler changeTheme={this.changeTheme} />
              </Heading>
            </Header>
            <Hr />
            {/* <button onClick={this.changeTheme}>change mode</button> */}
            <Segment basic className="desc">
              I'm a 2nd year student pursuing Master's in Computer Applications
              🎓 from Guru Gobind Singh Indraprastha University 🏛. I'm a
              passionate learner who's always willing to learn and work across
              technologies and domains 💡. I love to explore new technologies
              and leverage them to solve real-life problems ✨. Apart from that
              I also love to guide and mentor newbies 👨🏻‍💻. I'm currently into Web
              Development 🕸️ and working on my Data Structures and Algorithms
              skills🤓.
              <br />
              <br />
              I'm a 2nd year student pursuing Master's in Computer Applications
              🎓 from Guru Gobind Singh Indraprastha University 🏛. I'm a
              passionate learner who's always willing to learn and work across
              technologies and domains 💡. I love to explore new technologies
              and leverage them to solve real-life problems ✨. Apart from that
              I also love to guide and mentor newbies 👨🏻‍💻. I'm currently into Web
              Development 🕸️ and working on my Data Structures and Algorithms
              skills🤓.
            </Segment>
          </div>
          <div>
            <Grid columns={2} divided stackable className="chart">
              <Grid.Column>
                <Chart
                  className="chart"
                  chartData={this.state.chartData1}
                  text="Technical Skills"
                />
              </Grid.Column>
              <Grid.Column>
                <Chart
                  className="chart"
                  chartData={this.state.chartData2}
                  text="Interpersonal Skills"
                />
              </Grid.Column>
            </Grid>
          </div>
          <Footer/>
        </div>

        <Navbar theme={this.props.theme}/>
      </Holder>

      // {/* </Sidebar> */}
    );
  }
}

export default About;
