import React from "react";
import { Header, Item } from "semantic-ui-react";

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
  SideHeader
} from "../dark-mode/styles";
// navbar
import Navbar from "../navbar/Navbar";
// footer
import Footer from "../dark-mode/Footer";
// dark mode toggler
import Toggler from "../dark-mode/Toggler";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      educationData: [
        {
          id: 0,
          degree: "Master's of Computer Application",
          cname: "Bharati Vidyapeeth's Institute of Computer Applications and Management",
          date: "2019-2022",
          desc:
            "Active member and an organiser of the HackBVICAM hackathon.",
          site: "http://bvicam.in/",
        },
        {
          id: 1,
          degree: "Bachelor's of Computer Application",
          cname: "Ambedkar Institute of Technology",
          date: "2016-2019",
          desc:
            "Particiated in SIH(Smart India Hackathon)2019 and other hackathons.",

          site: "http://www.ambp.in/ ",
        },
        {
          id: 2,
          degree: "High School and Secondary School",
          cname: "Lovely Public Sr. Sec. School",
          date: "2002-2016",
          desc:
            "Participated in various inter-school competitions and was also an active member of annual cultural fest.",

          site: "http://www.lpsschool.com/",
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
    const cardList = this.state.educationData.map((data) => {
      return(
        <Card raised color="blue">
        <Item.Group divided>
          <Item>
            <Item.Content>
              <CardHeader>
                <Item.Header>
                  {data.degree}
                  <SideHeader>({data.date})</SideHeader>
                  <CardSubHeader>{data.cname}</CardSubHeader>
                </Item.Header>
              </CardHeader>
              
              <Item.Description>
                <CardText>
                  {data.desc}
                </CardText>
                <div className="icons">
                  <a href={data.site}>
                    <CardIcon name="globe"></CardIcon>
                  </a>
                </div>
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Card>
      )
      
    });
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
          {cardList}
          <Footer />
        </div>
        <Navbar theme={this.props.theme} />
      </Holder>
    );
  }
}

export default Education;
