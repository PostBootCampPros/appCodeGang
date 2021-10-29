import React from "react";
import styled from "styled-components";

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
    top: 50px;
    left: -22vw;
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
      <li>home</li>
      <li>about us</li>
      <li>work with us</li>
      <li>find us/contact us</li>
      <li>menu</li>
    </Ul>
  );
};

export default RightNav;
