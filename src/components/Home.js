import React from "react";
import styled from "styled-components";
import backgroundM from "../assets/home/background-home-mobile.jpg";
import backgroundT from "../assets/home/background-home-tablet.jpg";
import backgroundD from "../assets/home/background-home-desktop.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Section>
      <div className="home">
        <section className="home_text">
          <h4>SO, YOU WANT TO TRAVEL TO</h4>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>
        <div className="oval">
          <p>
            <Link to="/destination">EXPLORE</Link>{" "}
          </p>
        </div>
      </div>
    </Section>
  );
}

export default Home;

const Section = styled.section`
  position: relative;
  background-color: #0b0d17;
  background-image: url(${backgroundD});
  background-position: center;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 920px) {
    background-image: url(${backgroundT});
    height: 1024px;
  }
  @media screen and (max-width: 600px) {
    background-image: url(${backgroundT});
    height: 800px;
  }

  @media screen and (max-width: 480px) {
    background-image: url(${backgroundM});
    height: 667px;
  }
  .home {
    display: flex;
    position: absolute;
    justify-content: space-between;
    align-items: center;
    color: #d0d6f9;
    top: 350px;
    margin: 0 165px 131px;
    @media screen and (max-width: 1550px) {
      top: 300px;
      margin: 0 100px 131px;
    }
    @media screen and (max-width: 1550px) {
      top: 275px;
      margin: 0 100px 100px;
    }
    

    @media screen and (max-width: 920px) {
      flex-direction: column;
      justify-content: center;
      text-align: center;
      top: 250px;
      margin: 0;
    }
    @media screen and (max-width: 600px) {
      top: 200px;
    }
    @media screen and (max-width: 480px) {
      top: 150px;
      margin: 0 10px;
    }
    .home_text {
      flex: 0.65;
      font-style: normal;
      font-weight: 400;
      @media screen and (max-width: 1300px) {
        flex: 0.75;
      }
      @media screen and (max-width: 1150px) {
        flex: 1;
      }
      @media screen and (max-width: 920px) {
        margin-bottom: 100px;
      }
      @media screen and (max-width: 600px) {
        margin-bottom: 50px;
      }

      h4 {
        font-family: "Barlow Condensed";
        font-size: 28px;
        line-height: 34px;
        letter-spacing: 4.725px;
        @media screen and (max-width: 1300px) {
          font-size: 26px;
          line-height: 32px;
        }
        @media screen and (max-width: 1000px) {
          font-size: 24px;
          line-height: 28px;
        }
        @media screen and (max-width: 920px) {
          font-size: 20px;
          line-height: 24px;
          letter-spacing: 3.375px;
        }
        @media screen and (max-width: 480px) {
          font-size: 16px;
          line-height: 19px;
          letter-spacing: 2.7px;
        }
      }
      h1 {
        font-family: "Bellefair";
        font-size: 150px;
        line-height: 172px;
        color: #ffffff;
        @media screen and (max-width: 1300px) {
          font-size: 145px;
          line-height: 165px;
        }
        @media screen and (max-width: 1000px) {
          font-size: 140px;
          line-height: 150px;
        }
        @media screen and (max-width: 600px) {
          font-size: 125px;
        }
        @media screen and (max-width: 480px) {
          font-weight: 400;
          font-size: 80px;
          line-height: 100px;
        }
      }
      p {
        font-family: "Barlow";
        font-size: 18px;
        line-height: 32px;
        padding-right: 150px;
        @media screen and (max-width: 1300px) {
          padding-right: 100px;
        }
        @media screen and (max-width: 1000px) {
          padding-right: 75px;
        }
        @media screen and (max-width: 920px) {
          font-size: 16px;
          line-height: 28px;
          padding: 0;
          margin: 0 150px 50px;
        }
        @media screen and (max-width: 750px) {
          margin: 0 100px 50px;
        }
        @media screen and (max-width: 650px) {
          margin: 0 50px 0px;
        }
        @media screen and (max-width: 480px) {
          font-size: 15px;
          line-height: 25px;
        }
      }
    }
    .oval {
      width: 274px;
      height: 274px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      border-radius: 50%;
      z-index: 2;
      @media screen and (max-width: 1000px) {
        width: 250px;
        height: 250px;
      }
      @media screen and (max-width: 920px) {
        width: 242px;
        height: 242px;
      }
      @media screen and (max-width: 480px) {
        height: 150px;
        width: 150px;
      }
      &::before {
        content: "";
        position: absolute;
        height: 0;
        width: 0;
        background-color: white;
        opacity: 0.5;
        z-index: 1;
        border-radius: 50%;
        transition: all ease-in-out 0.5s;
      }
      &:hover::before {
        height: 400px;
        width: 400px;
        @media screen and (max-width: 1000px) {
          width: 350px;
          height: 350px;
        }
        @media screen and (max-width: 480px) {
          height: 200px;
          width: 200px;
        }
      }
      p {
        font-family: "Bellefair";
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 37px;
        letter-spacing: 2px;
        color: #0b0d17;
        z-index: 3;
        text-decoration: none;
        @media screen and (max-width: 480px) {
          font-size: 20px;
          line-height: 23px;
          letter-spacing: 1.25px;
        }
        a {
          text-decoration: none;
          all: unset;
        }
      }
    }
  }
`;
