import React from "react";
import { Card,Header } from "semantic-ui-react";
// Image
import sidebarbg from "../../images/sidebarbg.jpg";
// CSS
import "../../css/master.css";



class Education extends React.Component {
  
  render() {
    return (
      <div className="education">
            <div className="header">
                <Header as="h1" dividing >
                    Education
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
      
      // {/* </Sidebar> */}
    );
  }
}

export default Education;
