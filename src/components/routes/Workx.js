import React from "react";
import { Card,Header } from "semantic-ui-react";
import Chart from "../Chart";
class Workx extends React.Component {
  render() {
    return (
      <div className="workx">
        <div className="header">
          <Header as="h1" dividing>
            Work Experience
          </Header>
        </div>
        {/* <hr/> */}
        <Card.Group>
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
          </Card>
        </Card.Group>
      </div>
    );
  }
}

export default Workx;
