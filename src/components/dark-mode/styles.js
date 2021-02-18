import styled from "styled-components";
import {Segment,Icon} from "semantic-ui-react";

export const Holder = styled.body`
  padding: 2vh !important;
  background-color: ${(props) => props.theme.body} !important;
  color: ${(props) => props.theme.text} !important;
`;
export const Heading =styled.h1`
  color: ${(props) => props.theme.text} !important;
`;
export const Span =styled.span`
  margin-top: 1em;
  float: right;
`;
export const Hr=styled.hr`
  color: ${(props) => props.theme.hrcolor} !important;
`;
// CARD SECTION
export const Card=styled(Segment)`
  background-color: ${(props) => props.theme.cardbg} !important;
  border-color: ${(props) => props.theme.borderColor} !important;
  
`;
export const CardText=styled.div`
  color: ${(props) => props.theme.text} !important;
`;
export const CardHeader=styled.h2`
  color: ${(props) => props.theme.text} !important;
`;
export const CardSubHeader=styled.h4`
  color: ${(props) => props.theme.text} !important;
`;
export const CardIcon=styled(Icon)`
  color: ${(props) => props.theme.text} !important;
`;
