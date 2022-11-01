import React from "react";
import hamburgerClose from "../../../assets/shared/icon-close.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function MobNavSlide(props) {
  return (
    <>
      <Slide>
        <img
          src={hamburgerClose}
          className="close"
          onClick={props.handleHamburger}
          alt=""
        />
        <ul>
          <li>
            <NavLink to="/" onClick={props.handleHamburger} end>
              <span>00</span> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination" onClick={props.handleHamburger}>
              <span> 01 </span> Destination
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew" onClick={props.handleHamburger}>
              <span> 02 </span> Crew
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology" onClick={props.handleHamburger}>
              <span> 03 </span> Technology
            </NavLink>
          </li>
        </ul>
      </Slide>
    </>
  );
}

export default MobNavSlide;

const Slide = styled.div`
  position: absolute;
  height: 100vh;
  left: 25%;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.7742px);
  .close {
    position: absolute;
    width: 24px;
    height: 21px;
    top: 33px;
    right: 25px;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    height: 204px;
    justify-content: space-between;
    position: absolute;
    left: 32px;
    top: 118px;
    li {
      position: relative;
      a {
        text-transform: uppercase;
        text-decoration: none;
        font-size: 16px;
        letter-spacing: 2.7px;
        line-height: 19.2px;
        font-weight: 400;
        color: white;
        cursor: pointer;
        &::before {
          display: block;
          content: " ";
          height: 0;
          width: 2px;
          position: absolute;
          bottom: 0;
          top: 0;
          right: 0;
          transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);
        }
        &:hover::before {
          height: 100%;
          background-color: white;
          opacity: 0.5;
        }
        span {
          font-weight: 700;
        }
      }
      .active::before{
          height: 100%;
          background-color: white;
        }
      
    }
  }
`;
