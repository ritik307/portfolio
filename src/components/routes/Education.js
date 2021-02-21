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
            "To overcome the problem of food wastage, Onlymeal provides a two way interaction between those with a food surplus and those looking for food. The data collected from this app includes nature of the food, date of expiry, location etc. This data when aggregated can be very useful for NGOs to connect the locations with surplus with those that are in need of the food.",
          site: "http://bvicam.in/",
        },
        {
          id: 1,
          degree: "Bachelor's of Computer Application",
          cname: "Ambedkar Institute of Technology",
          date: "2016-2019",
          desc:
            "While studying one might want to draw on the same page in order to make others or self understand the concept in a deeper manner. It is a extension that allows user to doodle over the active web page. The user can doodle with different colours,shapes and strokes.",

          site: "http://www.ambp.in/ ",
        },
        {
          id: 2,
          degree: "High School and Secondary School",
          cname: "Lovely Public Sr. Sec. School",
          date: "2002-2016",
          desc:
            "Visually impaired citizens face a lot of problems with the CAPTCHA authentication process. In some of the applications OTP is given as an alternative but not with the rest of the apps. In some of the apps audio captcha is provided but many citizens find it difficult to decipher. To overcome this problem designed a CAPTCHA using environmental sounds.",

          site: "http://www.lpsschool.com/",
        },
        // {
        //   id: 3,
        //   name: "High Schooling",
        //   date: "Apr 2020-May 2020",
        //   desc:
        //     "A blogging web Application that allowes user to post thier blogs. Application allows user to create their account. User can add comment to others post. Only registered users are allowed to post the content on the application. Registered users can edit/delete their post.",

        //   site: "http://www.lpsschool.com/",
        // },
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
