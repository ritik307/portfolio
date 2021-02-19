import styled from "styled-components";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export const NavStyle = styled.div`
  margin-bottom:20vh !important;
  @media (min-width: 991px) {
    display: none !important;
  }

`;
export const NavBarMenu = styled(Menu)`
  background-color: ${(props) => props.theme.cardbg} !important;
`;
export const IconLink = styled(Link)`
  color: ${(props) => props.theme.text} !important;
`;