import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TechnologyDetails } from "./TechnologyDetails";
import bagM from "../assets/technology/background-technology-mobile.jpg";
import bagD from "../assets/technology/background-technology-desktop.jpg";
import bagT from "../assets/technology/background-technology-tablet.jpg";

function Technology() {
  const [technologys] = useState(TechnologyDetails);
  const [value, setValue] = useState(0);
  const { img, name, desc } = technologys[value];
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width:920px)");
    mql.addEventListener("change", (e) => {
      const result = e.matches;
      setTab(result);
    });
  }, []);

  return (
    <Section>
      <div className="wrapper">
        <h4>
          <span>03</span>SPACE LAUNCH 101
        </h4>
        <div className="technology">
          <div className="technology_details">
            <div className="technology_details_controls">
              {technologys.map((technology, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setValue(index);
                    setActive(index);
                  }}
                  className={active === index ? "active" : ""}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div className="technology_details_text">
              <span>THE TERMINOLOGY...</span>
              <h1>{name}</h1>
              <p>{desc}</p>
            </div>
          </div>
          <div className="technology_images">
            <img src={tab ? img.land : img.port} alt="" />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Technology;

const Section = styled.section`
  position: relative;
  background-color: #0b0d17;
  background-image: url(${bagD});
  height: 900px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #d0d6f9;
  overflow: hidden;
  @media screen and (max-width: 920px) {
    background-image: url(${bagT});
    height: 1024px;
  }
  @media screen and (max-width: 480px) {
    background-image: url(${bagM});
    height: 850px;
    text-align: center;
  }
  .wrapper {
   
    @media screen and (max-width: 480px) {
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
    .technology {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 310px;
      margin: 0 0 0 150px;
      gap: 200px;
      @media screen and (max-width: 1550px) {
        gap: 150px;
      }
      @media screen and (max-width: 1350px) {
        gap: 50px;
      }
      @media screen and (max-width: 1052px) {
        margin-left: 50px;
      }
      @media screen and (max-width: 920px) {
        flex-direction: column-reverse;
        text-align: center;
        margin: 0 10px;
        top: 200px;
      }
      .technology_details {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 25px;
        @media screen and (max-width:920px){
          flex-direction: column;
          margin: 0 5px;
        }
        .technology_details_controls {
          display: flex;
          flex-direction: column;
          gap: 15px;
          @media screen and (max-width:920px){
          flex-direction: row;
        }
          button {
            width: 80px;
            height: 80px;
            font-family: "Bellefair";
            font-style: normal;
            font-weight: 400;
            font-size: 32px;
            line-height: 37px;
            text-align: center;
            border-radius: 50%;
            border: 1px solid white;
            outline: none;
            background-color: transparent;
            color: white;
            opacity: 0.5;
            cursor: pointer;
            @media screen and (max-width: 920px) {
              width: 58px;
              height: 58px;
              font-size: 24px;
              line-height: 28px;
              letter-spacing: 1.5px;
            }
            @media screen and (max-width: 480px) {
              width: 40px;
              height: 40px;
              font-size: 16px;
              line-height: 18px;
              text-align: center;
              letter-spacing: 1px;
            }
            &:hover {
              opacity: 0.85;
            }
          }
          .active {
            background-color: white;
            color: black;
            opacity: 1;
          }
        }
        .technology_details_text {
          @media screen and (max-width:920px){
          margin: 0 25px;
        }
          span {
            font-family: "Barlow Condensed";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 2.7px;
            color: #d0d6f9;
            @media screen and (max-width: 480px) {
              font-size: 14px;
              line-height: 17px;
              letter-spacing: 2.3625px;
            }
          }
          h1 {
            font-family: "Bellefair";
            font-style: normal;
            font-weight: 400;
            font-size: 56px;
            line-height: 64px;
            color: #ffffff;
            margin-top: 10px;
            @media screen and (max-width: 1250px) {
              font-size: 45px;
              line-height: 50px;
            }
            @media screen and (max-width: 1150px) {
              font-size: 40px;
              line-height: 50px;
            }
            /* @media screen and (max-width: 920px) {
              font-size: 40px;
              line-height: 46px;
            } */
            @media screen and (max-width: 480px) {
              font-size: 24px;
              line-height: 28px;
            }
          }
          p {
            font-family: "Barlow";
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 32px;
            color: #d0d6f9;
            margin-top: 10px;
            @media screen and (max-width: 1250px) {
              font-size: 17px;
              line-height: 30px;
            }
            @media screen and (max-width: 920px) {
              font-size: 16px;
              line-height: 28px;
            }
            @media screen and (max-width: 480px) {
              font-size: 15px;
              line-height: 25px;
            }
          }
        }
      }
      .technology_images {
        width: 515px;
        height: 527px;
        @media screen and (max-width: 1410px) {
          width: 450px;
          height: 475px;
        }
        @media screen and (max-width: 1150px) {
          width:400px;
          height:425px;
        }
        @media screen and (max-width: 920px) {
          width: 768px;
          height: 310px;
        }
        @media screen and (max-width: 775px) {
          width: 700px;
          height: 310px;
          
        }
        @media screen and (max-width: 700px) {
          width: 650px;
          height: 310px;
          
        }
        @media screen and (max-width: 600px) {
          width: 550px;
          height: 310px;
          
        }
        @media screen and (max-width: 500px) {
          width: 450px;
          height: 310px;
          
        }
        @media screen and (max-width: 480px) {
          width: 377px;
          height: 170px;
        }
        @media screen and (max-width: 400px) {
          width: 325px;
          height: 170px;
        }
        img {
          width: 515px;
          height: 527px;
        @media screen and (max-width: 1410px) {
          width: 450px;
          height: 475px;
        }
        @media screen and (max-width: 1150px) {
          width:400px;
          height:425px;
        }
        @media screen and (max-width: 920px) {
          width: 768px;
          height: 310px;
        }
        @media screen and (max-width: 775px) {
          width: 700px;
          height: 310px;
        }
        @media screen and (max-width: 700px) {
          width: 650px;
          height: 310px; 
        }
        @media screen and (max-width: 600px) {
          width: 550px;
          height: 310px; 
        }
        @media screen and (max-width: 500px) {
          width: 450px;
          height: 310px;  
        }
        @media screen and (max-width: 480px) {
          width: 377px;
          height: 170px;
        }
        @media screen and (max-width: 400px) {
          width: 325px;
          height: 170px;
        }
      }
    }
  }
}
`;
