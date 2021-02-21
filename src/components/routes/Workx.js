import React from "react";
import { Header, Item, } from "semantic-ui-react";
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
import Footer from  "../dark-mode/Footer";
// dark mode toggler
import Toggler from "../dark-mode/Toggler";
// custom styling
import { NoComputerImg } from "../dark-mode/styles";
// images
import gssoc from "../../images/internship/gssoc.png";
import postman from "../../images/internship/postman.png";
import sparkfoundation from "../../images/internship/sparkfoundation.png";
import quilinx from "../../images/internship/quilinx.jpg";
import shelteraction from "../../images/internship/shelter1.png";

class Workx extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images:[gssoc,postman,sparkfoundation,quilinx,shelteraction],
      workData: [
        {
          id: 0,
          name: "GirlScript Summer of Code",
          date: "Jan 2020-Feb 2020",
          desc:
            "I have been selected as a participant in GSSoC'21.Looking forward to contribute in open source.",
          
          site: "https://gssoc.girlscript.tech/",
        },
        {
          id: 1,
          name: "Postman Student Expert",
          date: "Jan 2020-Feb 2020",
          desc:
            "Successfully completed the student expert program provided by Postman for API building and testing.",
          
          site: "https://www.postman.com/",
        },
        {
          id: 2,
          name: "Spark Foundation",
          date: "Jan 2020-Feb 2020",
          desc:
            "Build a banking application the keeps the record of a perticular user's transaction records.",
          
          site: " https://www.thesparksfoundationsingapore.org/",
        },
        {
          id: 3,
          name: "Quilinx",
          date: "Oct 2020-Dec 2020",
          desc:
            "Worked on the web application that provides a platform on reporting the act of cyber bullying in schools and in colleges.",
          
          site: " https://quilinx.in/ ",
        },
        {
          id: 4,
          name: "Cocogreen",
          date: "June 2020-Jul 2020",
          desc:
            "Build a website for charitable organisation(Shelter Action) that provide cheap and affordable housing to labourers in southern part of India.",
          site: "https://shelter-action.web.app/",
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
    const cardList = this.state.workData.map((data) => {
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
                Work Experience
                <Toggler changeTheme={this.changeTheme} />
              </Heading>
            </Header>
            <Hr />
          </div>
          {/* <hr/> */}

          {cardList}
          
          <Footer/>
        </div>
        <Navbar theme={this.props.theme}/>
      </Holder>
    );
  }
}

export default Workx;
