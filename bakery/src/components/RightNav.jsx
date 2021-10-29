import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding: ;

  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    display: none;
    flex-flow: column nowrap;
    background-color: #696969;
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100vw;
    width: 100px;
    padding-top: 3.5rem;
    align-items: center;
    padding-top: 3.5rem;
    li {
      color: white;
    }
  }
`;

const RightNav = (props) => {
  return (
    <Ul>
      <li>home</li>
      <li>about us</li>
      <li>work with us</li>
      <li>find us/contact us</li>
      <li>menu</li>
    </Ul>
  );
};

export default RightNav;
