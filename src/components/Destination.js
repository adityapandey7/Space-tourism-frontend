import React, { useState } from "react";
import styled from "styled-components";
import bagM from "../assets/destination/background-destination-mobile.jpg";
import bagT from "../assets/destination/background-destination-tablet.jpg";
import bagD from "../assets/destination/background-destination-desktop.jpg";
import { planets } from "./DestinationDetail";

function Destination() {
  const [planet] = useState(planets);
  const [value, setValue] = useState(0);
  const { img, name, parag, dis, day } = planet[value];
  const [active, setActive] = useState(0);

  return (
    <Section>
      <h4>
        <span>01</span> Pick your destination
      </h4>
      <div className="destination">
        <div className="destination_img">
          <img src={img} alt="" />
        </div>
        <div className="destination_details">
          <div className="destination_details_nav">
            {planet.map((planet, index) => (
              <button
                key={index}
                onClick={() => {
                  setValue(index);
                  setActive(index);
                }}
                className={active === index ? "active" : ""}
              >
                {planet.name}
              </button>
            ))}
          </div>
          <div className="destination_details_text">
            <h1>{name}</h1>
            <p>{parag}</p>
            <hr />
            <div className="destination_details_text_numeric">
              <div className="numeric">
                <span>AVG. DISTANCE</span>
                <h5>{dis}</h5>
              </div>
              <div className="numeric">
                <span>Est. travel time </span>
                <h5>{day}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Destination;

const Section = styled.section`
  position: relative;
  background-color: #0b0d17;
  background-image: url(${bagD});
  height: 900px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #d0d6f9;
  @media screen and (max-width: 920px) {
    background-image: url(${bagT});
    height: 1024px;
  }
  @media screen and (max-width: 480px) {
    background-image: url(${bagM});
    height: 850px;
    text-align: center;
  }
  h4 {
    position: absolute;
    top: 212px;
    left: 160px;
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 4.725px;
    text-transform: uppercase;
    color: #ffffff;
    @media screen and (max-width: 1100px) {
      left: 50px;
    }
    @media screen and (max-width: 920px) {
      top: 136px;
      left: 40px;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 3.375px;
    }
    @media screen and (max-width: 480px) {
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;
      top: 90px;
    }
    span {
      font-weight: 700;
      mix-blend-mode: normal;
      opacity: 0.25;
      padding-right: 10px;
    }
  }
  .destination {
    position: absolute;
    top: 310px;
    display: flex;
    margin: 0 250px;
    @media screen and (max-width: 1350px) {
      top: 280px;
      margin: 0 200px;
    }
    @media screen and (max-width: 1200px) {
      margin: 0 180px 0 150px;
    }
    @media screen and (max-width: 1100px) {
      margin: 0 150px 0 130px;
    }
    @media screen and (max-width: 920px) {
      flex-direction: column;
      margin: 0 50px;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 50px;
    }
    @media screen and (max-width: 480px) {
      margin: 0 25px;
      top: 140px;
    }

    .destination_img {
      height: 445px;
      width: 445px;
      margin-right: 157px;
      @media screen and (max-width: 1350px) {
        margin-right: 130px;
      }
      @media screen and (max-width: 1200px) {
        margin-right: 100px;
      }
      @media screen and (max-width: 1100px) {
        margin-right: 50px;
      }
      @media screen and (max-width: 1050px) {
        height: 400px;
        width: 400px;
      }
      @media screen and (max-width: 920px) {
        height: 300px;
        width: 300px;
        margin-right: 0;
      }
      @media screen and (max-width: 480px) {
        height: 170px;
        width: 170px;
      }
      img {
        width: 445px;
        object-fit: contain;
        @media screen and (max-width: 1050px) {
          width: 400px;
        }
        @media screen and (max-width: 920px) {
          width: 300px;
        }
        @media screen and (max-width: 480px) {
          width: 170px;
        }
      }
    }
    .destination_details {
      .destination_details_nav {
        display: flex;
        gap: 15px;
        @media screen and (max-width: 920px) {
          gap: 10px;
        }
        button {
          background-color: transparent;
          font-family: "Barlow Condensed";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          letter-spacing: 2.7px;
          text-transform: uppercase;
          color: #ffffff;
          border: none;
          outline: none;
          cursor: pointer;
          position: relative;
          @media screen and (max-width: 920px) {
            margin-right: 15px;
          }
          @media screen and (max-width: 480px) {
            font-size: 14px;
            line-height: 17px;
            letter-spacing: 2.3625px;
          }
          &::before {
            display: block;
            content: " ";
            height: 3px;
            width: 0;
            position: absolute;
            bottom: -5px;
            left: 0;
            transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);
          }
          &:hover::before{
                width: 100%;
                background-color: white;
                opacity: 0.5;
          }
        }
      
        .active::before{
          width: 100%;
          background-color: white;
        }
      }
      .destination_details_text {
        h1 {
          font-family: "Bellefair";
          font-style: normal;
          font-weight: 400;
          font-size: 100px;
          line-height: 115px;
          color: #ffffff;
          text-transform: uppercase;
          @media screen and (max-width: 920px) {
            font-size: 80px;
            line-height: 92px;
          }
          @media screen and (max-width: 480px) {
            font-size: 56px;
            line-height: 64px;
          }
        }
        p {
          font-family: "Barlow";
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 32px;
          color: #d0d6f9;
          @media screen and (max-width: 920px) {
            font-size: 16px;
            line-height: 28px;
          }
          @media screen and (max-width: 480px) {
            font-size: 15px;
            line-height: 25px;
          }
        }
        hr {
          margin-top: 54px;
          background: #383b4b;
        }
        .destination_details_text_numeric {
          display: flex;
          gap: 50px;
          margin-top: 30px;
          @media screen and (max-width: 920px) {
            justify-content: center;
            align-items: center;
          }
          @media screen and (max-width: 480px) {
            flex-direction: column;
            gap: 25px;
          }
          .numeric {
            span {
              font-family: "Barlow Condensed";
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 17px;
              letter-spacing: 2.3625px;
              text-transform: uppercase;
              color: #d0d6f9;
              @media screen and (max-width: 480px) {
                margin-bottom: 10px;
              }
            }
            h5 {
              font-family: "Bellefair";
              font-style: normal;
              font-weight: 400;
              font-size: 28px;
              line-height: 32px;
              text-transform: uppercase;
              color: #ffffff;
            }
          }
        }
      }
    }
  }
`;
