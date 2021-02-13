import React from "react";
import { Card, Grid, Header } from "semantic-ui-react";
import Chart from "../Chart";
class Home extends React.Component {
  constructor() {
    super();
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
    });
  }
  render() {
    return (
      <div className="home">
        <div className="header">
          <Header as="h1" dividing>
            Projects
          </Header>
        </div>
        {/* <hr/> */}
        <Card.Group>
          <Card fluid raised color="red">
            <Card.Content>
              <Grid columns={2} stackable>
                    <Grid.Column>
                        <Card.Header>Project 01</Card.Header>
                        <Card.Meta>Jun2020-July2020</Card.Meta>
                        <Card.Description>
                            Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                            Loremipsum Loremipsum
                        </Card.Description>
                    </Grid.Column>
                    <Grid.Column>
                        <Chart
                            className="chart"
                            chartData={this.state.chartData}
                            text="Technology Used"
                            displayTitle={false}
                        />
                    </Grid.Column>
              </Grid>
            </Card.Content>
          </Card>
          {/* <Card fluid raised color="blue">
            <Card.Content>
              <Card.Header>Project 01</Card.Header>
              <Card.Meta>Jun2020-July2020</Card.Meta>
              <Card.Description>
                Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                Loremipsum Loremipsum
              </Card.Description>
            </Card.Content>
          </Card>
          <Card fluid raised color="green">
            <Card.Content>
              <Card.Header>Project 01</Card.Header>
              <Card.Meta>Jun2020-July2020</Card.Meta>
              <Card.Description>
                Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                Loremipsum Loremipsum
              </Card.Description>
            </Card.Content>
          </Card>
          <Card fluid raised color="red">
            <Card.Content>
              <Card.Header>Project 01</Card.Header>
              <Card.Meta>Jun2020-July2020</Card.Meta>
              <Card.Description>
                Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                Loremipsum Loremipsum
              </Card.Description>
            </Card.Content>
          </Card>
          <Card fluid raised color="blue">
            <Card.Content>
              <Card.Header>Project 01</Card.Header>
              <Card.Meta>Jun2020-July2020</Card.Meta>
              <Card.Description>
                Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                Loremipsum Loremipsum
              </Card.Description>
            </Card.Content>
          </Card> */}
        </Card.Group>
      </div>
    );
  }
}

export default Home;
