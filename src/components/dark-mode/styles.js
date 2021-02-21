import styled from "styled-components";
import { Segment, Icon, Image } from "semantic-ui-react";

export const Holder = styled.body`
  padding: 2vh !important;
  background-color: ${(props) => props.theme.body} !important;
  color: ${(props) => props.theme.text} !important;
`;
export const Heading = styled.h1`
  color: ${(props) => props.theme.text} !important;
`;
export const Span = styled.span`
  margin-top: 1em;
  float: right;
`;
export const Hr = styled.hr`
  color: ${(props) => props.theme.hrcolor} !important;
`;
// CARD SECTION
export const Card = styled(Segment)`
  background-color: ${(props) => props.theme.cardbg} !important;
  border-color: ${(props) => props.theme.borderColor} !important;
`;
export const CardText = styled.div`
  color: ${(props) => props.theme.text} !important;
`;
export const CardHeader = styled.h2`
  color: ${(props) => props.theme.text} !important;
`;
export const CardSubHeader = styled.h4`
  color: ${(props) => props.theme.footer} !important;
  margin-top:  0.2em !important;
`;
export const CardIcon = styled(Icon)`
  color: ${(props) => props.theme.text} !important;
`;
export const NoComputerImg = styled(Image)`
  @media (max-width:  991px) {
    display: none !important;
  }
`;
export const CompFooter = styled.footer`
  color: ${(props) => props.theme.footer} !important;
  font-size: 2.5vh !important;
  margin-top: 6vh !important;
  margin-bottom: 1vh !important;
  text-align: center !important;

  @media (max-width:  991px) {
    display: none !important;
  }
`;

export const MobFooter = styled.footer`
  font-size: 3vh;
  margin-top: 7vh !important;
  margin-bottom: 5vh !important;
  text-align: center !important;

  @media (min-width:  991px) {
    display: none !important;
  }
`;
export const FooterLink = styled.a`
  color: ${(props) => props.theme.footer} !important;
  padding-left: 2vh !important;
  padding-right: 2vh !important;
`;
export const SideHeader = styled.em`
    font-size: 20px !important;
    margin-left: 0.5em !important;
`;