import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../../assets/shared/logo.svg";
import hamburger from "../../../assets/shared/icon-hamburger.svg";
import MobNavSlide from "./MobNavSlide";

function MobNav() {
  const [openNav, setOpenNav] = useState(false);

  function handleHamburger() {
    setOpenNav((previous) => !previous);
  }

  return (
    <>
      <Navbar>
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        {!openNav ? (
          <img src={hamburger} onClick={handleHamburger} alt="" />
        ) : (
          <MobNavSlide handleHamburger={handleHamburger} />
        )}
      </Navbar>
    </>
  );
}

export default MobNav;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 50px;

  .logo img {
    position: absolute;
    width: 40px;
    height: 40px;
    left: 24px;
    top: 24px;
  }

  img {
    position: absolute;
    width: 24px;
    height: 21px;
    right: 25px;
    top: 33px;
    cursor: pointer;
  }
`;
