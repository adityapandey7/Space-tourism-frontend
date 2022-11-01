import React from "react";
import styled from "styled-components";
import logo from "../../../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";

function DesNav() {
  return (
    <>
      <Navbar>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav_desc">
          <div className="nav_desc_link">
            <ul>
              <li>
                <NavLink to="/" end>
                  <span>00 </span> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/destination">
                  <span> 01 </span> Destination
                </NavLink>
              </li>
              <li>
                <NavLink to="/crew">
                  <span> 02 </span> Crew
                </NavLink>
              </li>
              <li>
                <NavLink to="/technology">
                  <span> 03 </span> Technology
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default DesNav;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 96px;
  top: 40px;
  @media screen and (max-width: 920px) {
        top:0;
  }
  .logo {
    padding-left: 55px;
    @media screen and (max-width: 920px) {
       padding-left: 39px;
  }
    img {
      width: 48px;
      height: 48px;
    }
  }
  .nav_desc {
    .nav_desc_link {
      ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        width: 830px;
        height: 96px;
        background: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(40.7742px);
        padding: 0 55px;
        @media screen and (max-width: 1100px) {
          width: 650px;
          padding:0;
        }
        @media screen and (max-width: 920px) {
          width: 450px;
          
        }
        li {
          
          position: relative;
          a {
            all: unset;
            color: white;
            font-family: "Barlow Condensed";
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 2.7px;
            text-transform: uppercase;
            text-decoration: none;
            cursor: pointer;
            @media screen and (max-width: 920px) {
              font-size: 14px;
              line-height: 17px;
              letter-spacing: 2.3625px;
            }
           
            &::before {
            display: block;
            content: " ";
            height: 4px;
            width: 0;
            position: absolute;
            bottom: -37.5px;
            left: 0;
            transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);
             }
             &:hover::before{
                width: 100%;
                background-color: white;
                opacity: 0.5;
              }
            span {
              font-weight: 700;
              @media screen and (max-width: 920px) {
                display: none;
              }
            }
          }
          .active::before{
          width: 100%;
          background-color: white;
          }
          
        }
        }
      }
    }
  
`;
