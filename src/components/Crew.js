import React, { useState } from "react";
import styled from "styled-components";
import bgmM from "../assets/crew/background-crew-mobile.jpg";
import { CrewDetails } from "./CrewDetails";
import bgmD from "../assets/crew/background-crew-desktop.jpg";
import bgmT from "../assets/crew/background-crew-tablet.jpg";

function Crew() {
  const [crews] = useState(CrewDetails);
  const [value, setValue] = useState(0);
  const { img, name, des, desc } = crews[value];
  const [active, setActive] = useState(0);
  return (
    <>
      <Section>
        <h4>
          <span>02</span>Meet your crew
        </h4>
        <div className="crew">
          <div className="crew_detail">
            <div className="crew_detail_text">
              <h5>{des}</h5>
              <h1>{name}</h1>
              <p>{desc}</p>
            </div>
            <div className="crew_detail_control">
              {crews.map((crew, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setValue(index);
                    setActive(index);
                  }}
                  className={active === index ? "active" : ""}
                ></button>
              ))}
            </div>
          </div>
          <div className="crew_image">
            <img src={img} alt="" />
          </div>
        </div>
      </Section>
    </>
  );
}

export default Crew;

const Section = styled.section`
  position: relative;
  background-color: #0b0d17;
  background-image: url(${bgmD});
  height: 900px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #d0d6f9;
  overflow: hidden;
  @media screen and (max-width: 920px) {
    background-image: url(${bgmT});
    height: 1024px;
  }
  @media screen and (max-width: 480px) {
    background-image: url(${bgmM});
    height: 710px;
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
      @media screen and (max-width: 920px) {
        font-weight: 700;
      }
    }
  }
  .crew {
    display: flex;
    gap: 50px;
    position: absolute;
    top: 200px;
    margin: 0 150px;
    @media screen and (max-width: 1360px) {
      margin: 0 100px;
    }
    @media screen and (max-width: 1100px) {
      margin: 0 50px;
      gap: 25px;
    }
    @media screen and (max-width: 920px) {
      flex-direction: column;
      text-align: center;
      align-items: center;
      
    }
    @media screen and (max-width: 550px) {
      margin: 0 25px;
    }
    @media screen and (max-width: 480px) {
      flex-direction: column-reverse;
      top: 150px;
    }
    .crew_detail {
      display: flex;
      flex-direction: column;
      gap: 100px;
      justify-content: center;
      @media screen and (max-width: 920px) {
        gap: 50px;
      }
      @media screen and (max-width: 480px) {
        flex-direction: column-reverse;
      }
      .crew_detail_text {
        h5 {
          font-family: "Bellefair";
          font-style: normal;
          font-weight: 400;
          font-size: 32px;
          line-height: 37px;
          text-transform: uppercase;
          color: #ffffff;
          mix-blend-mode: normal;
          opacity: 0.5;
          @media screen and (max-width: 1210px) {
            font-size: 28px;
            line-height: 32px;
          }
          @media screen and (max-width: 1150px) {
            font-size: 26px;
            line-height: 30px;
          }
          @media screen and (max-width: 920px) {
            font-size: 24px;
            line-height: 28px;
          }
          @media screen and (max-width: 480px) {
            font-size: 16px;
            line-height: 18px;
          }
        }
        h1 {
          margin-top: 15px;
          font-family: "Bellefair";
          font-style: normal;
          font-weight: 400;
          font-size: 56px;
          line-height: 64px;
          text-transform: uppercase;
          color: #ffffff;
          @media screen and (max-width: 1210px) {
            font-size: 50px;
            line-height: 60px;
          }
          @media screen and (max-width: 1150px) {
            font-size: 38px;
            line-height: 50px;
          }
          @media screen and (max-width: 920px) {
            font-size: 40px;
            line-height: 46px;
          }
          @media screen and (max-width: 480px) {
            font-size: 24px;
            line-height: 28px;
            margin-top: 10px;
          }
        }
        p {
          margin-top: 27px;
          font-family: "Barlow";
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 32px;
          color: #d0d6f9;
          padding-right: 150px;
          @media screen and (max-width: 1100px) {
            padding-right: 50px;
          }
          @media screen and (max-width: 920px) {
            font-size: 16px;
            line-height: 28px;
            padding: 0;
          }
          @media screen and (max-width: 480px) {
            font-size: 15px;
            line-height: 25px;
          }
        }
      }
      .crew_detail_control {
        display: flex;
        gap: 10px;
        @media screen and (max-width: 920px) {
          align-items: center;
          justify-content: center;
        }
        button {
          background-color: white;
          height: 15px;
          width: 15px;
          border-radius: 50%;
          cursor: pointer;
          opacity: 0.3;
          &:hover {
            opacity: 0.8;
          }
         
        }
        .active {
          opacity: 1;
        }
      }
    }
    .crew_image {
      width: 560px;
      height: 700px;
      @media screen and (max-width: 1360px) {
        width: 500px;
        height: 650px;
      }
      @media screen and (max-width: 1210px) {
        width: 450px;
        height: 600px;
      }
      @media screen and (max-width: 480px) {
        width: 327px;
        height: 223px;
      }
      img {
        width: 500px;
        height: 712px;
        object-fit: contain;
        @media screen and (max-width: 1360px) {
          width: 450px;
          height: 600px;
        }
        @media screen and (max-width: 1210px) {
          width: 425px;
          height: 575px;
        }
        @media screen and (max-width: 480px) {
          width: 327px;
          height: 223px;
        }
      }
    }
  }
`;
