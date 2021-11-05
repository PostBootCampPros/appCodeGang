import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #696969;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    left: 0;
    height: 100vw;
    width: 100px;
    padding-top: 3.5rem;
    align-items: center;
    translation: transform 0.3s ease-in-out;
    li {
      color: white;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to="/">home</Link>
      <Link to="AboutUs">about us</Link>
      <Link to="WorkWithUs">work with us</Link>
      <Link to="ContactUs">find us/contact us</Link>
      <Link to="Menu">menu</Link>
    </Ul>
  );
};

export default RightNav;
