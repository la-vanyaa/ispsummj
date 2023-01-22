import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../context";
import data from "../Data";

const OrganizingTeamSection = () => {
  const { name, image } = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <h1 className="hero-heading">{name}</h1>
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src={image} alt="hero image" className="hero-img " />
          </picture>
        </div>
      </div>
      <div>
        <h2>OFFICE BEARERS OF ISP</h2>
        <div className="bearers">
            {data.OfficeBearers.map((user) => {
            return(
                <div className="office-bearers">
            <input className="one" value={user.one} />
            <input className="two" value={user.two} />
        </div>
            )
        })}</div>
        
        
      </div>
      <div className="bearers">
        <h2>CONVENTION ORGANIZING COMMITTEE</h2>

        <h3>Treasurer</h3>
        <div className="bearers">
            {data.Treasurers.map((user) => {
            return(
                <div className="office-bearers">
            <input className="one" value={user.one} />
            <input className="two" value={user.two} />
        </div>
            )
        })}
        </div>

        
        <h3>Patrons</h3>
        <div className="bearers">
            {data.Patrons.map((user) => {
            return(
                <div className="office-bearers">
            <input className="twos" value={user.one} />
        </div>
            )
        })}
        </div>

        <h3>Advisors</h3>
        <div className="bearers">
            {data.Advisors.map((user) => {
            return(
                <div className="office-bearers">
            <input className="one" value={user.one} />
            <input className="two" value={user.two} />
        </div>
            )
        })}
        <div className="office-bearers">
            <input className="twos" value="Dr. Yash Paul Dev" />
        </div>
        </div>

        <h3>Co-ordinators</h3>
        <div className="bearers">
            {data.Coordinators.map((user) => {
            return(
                <div className="office-bearers">
            <input className="one" value={user.one} />
            <input className="two" value={user.two} />
        </div>
            )
        })}
        <div className="office-bearers">
            <input className="twos" value="Dr. Vivek Sharma" />
        </div>
        
      </div>

      <div className="bearers">
        <h2>RECEPTION COMMITTEE</h2>
        <h3>Chairperson</h3>
        <div className="bearers">
                <div className="office-bearers">
            <input className="twos" value="Dr. Shalu Chandna" />
            </div>
        </div>
        </div>
      </div>

      <div className="bearers">
        <h2>REGISTRATION COMMITTEE</h2>
        <h3>Chairperson</h3>
        <div className="bearers">
                <div className="office-bearers">
            <input className="twos" value="Dr. Surinder Sachdeva" />
            </div>
        </div>
        <h3>Co- Chairperson</h3>
        <div className="bearers">
                <div className="office-bearers">
            <input className="twos" value="Dr. Shipra Gupta" />
            </div>
        </div>
        </div>

        <div className="bearers">
        <h2>SCIENTIFIC COMMITTEE</h2>
        <h3>Chairperson</h3>
        <div className="bearers">
                <div className="office-bearers">
            <input className="twos" value="Dr. Vishakha Grover" />
            </div>
        </div>
        <h3>Co- Chairperson (Paper)</h3>
        <div className="bearers">
                <div className="office-bearers">
                <input className="one" value="Dr Shalini Gugnani" />
            <input className="two" value="Dr Deepika Bali" />
            </div>
        </div>
        <h3>Co- Chairperson (Poster)</h3>
        <div className="bearers">
                <div className="office-bearers">
                <input className="one" value="Dr Jyoti Gupta" />
            <input className="two" value="Dr Nandini Bhaskar" />
            </div>
        </div>
        </div>

        <div className="bearers">
        <h2>PRE CONFERENCE COMMITTEE</h2>
        <h3>Chairperson</h3>
        <div className="bearers">
                <div className="office-bearers">
            <input className="twos" value="Dr. Tarun Nanda" />
            </div>
        </div>
        <h3>Co- Chairperson</h3>
        <div className="bearers">
                <div className="office-bearers">
            <input className="twos" value="Dr. Rose Kanwaljeet Kaur" />
            </div>
        </div>
        </div>

        <div className="bearers">
        <h2>HOSPITALITY</h2>
        <h3>Chairperson</h3>
        <div className="bearers">
                <div className="office-bearers">
            <input className="twos" value="Dr. Sakshi Garg" />
            </div>
        </div>
        </div>

        <div className="bearers">
        <h2>TRADE FAIR</h2>
        <h3>Chairperson</h3>
        <div className="bearers">
                <div className="office-bearers">
            <input className="twos" value="Dr. Sanjeev Jain" />
            </div>
        </div>
        </div>

        <div className="bearers">
        <h2>ACCOMPANYING PERSONS COMMITTEE</h2>
        <h3>Chairperson</h3>
        <div className="bearers">
                <div className="office-bearers">
            <input className="twos" value="Dr. Rajan Gupta" />
            </div>
        </div>
        <h3>Co- Chairperson</h3>
        <div className="bearers">
                <div className="office-bearers">
            <input className="twos" value="Dr. Harveen Singh" />
            </div>
        </div>
        </div>

    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .bearers {
    margin-top: 30px
  }

  .office-bearers{
    display: flex;
  }

  input{
    width: 40%;
    font-size: 20px;
  }

  .twos{
    margin-left: 150px;
    width: 150%;
    max-width: 100rem;
  }

  .one{
        margin-left: 150px;
  }

   h2 {
    font-size: 3.2rem;
    text-align: left;
    margin-top: 10px;
    margin-left: 150px;
  }

  h3 {
    font-size: 2.6rem;
    text-align: left;
    margin-top: 30px;
    margin-left: 150px;
  }

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 100px
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    margin-left: 110px
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default OrganizingTeamSection;
