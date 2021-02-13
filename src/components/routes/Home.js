import React from "react";
import { Card,Header } from "semantic-ui-react";
class Home extends React.Component {
  render() {
    return (
        <div className="home">
            <div className="header">
                <Header as="h1" dividing >
                    Projects
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

export default Home;
