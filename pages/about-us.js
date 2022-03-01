import Image from 'next/image';
import { useContext, useEffect } from 'react';
import { Ctx } from '../lib/ctxProvider';
import styled from 'styled-components';
import {
  SectionBlurb,
  SectionContainer,
  SectionHeading,
} from '../styles/GlobalStyles';

import img from '../public/assets/profile-imgs/profile.png';

import sam from '../public/assets/profile-imgs/sam.png';
import dan from '../public/assets/profile-imgs/dan.png';
import cam from '../public/assets/profile-imgs/cam.png';
import mark from '../public/assets/profile-imgs/mark.png';
import malik from '../public/assets/profile-imgs/malik.png';
import luke from '../public/assets/profile-imgs/luke.png';
import erin from '../public/assets/profile-imgs/erin.png';
import frankie from '../public/assets/profile-imgs/frankie.png';
import rich from '../public/assets/profile-imgs/rich.png';
import avatar from '../public/assets/profile-imgs/avatar.png';

export default function AboutUs() {
  const { setShouldStick, setStickyNavCoords } = useContext(Ctx);
  useEffect(() => {
    setShouldStick(true);
    setStickyNavCoords(0);
    return () => {
      setShouldStick(false);
    };
  });
  return (
    <StyledAbout>
      <SectionContainer>
        <SectionHeading align="center">About us</SectionHeading>
        <AboutTheBusiness>
          <p>
            Above & Beyond Solutions love events. We are passionate about them
            and take each one personally. Our passion and dedication, combined
            with the experience of our in-house event specialists enables us to
            exceed client expectations.
            <br />
            <br />
            <strong style={{ fontWeight: '300' }}>
              We make it our priority to understand our client&apos;s
              objectives, working alongside clients from concept to completion
              to create a unique and memorable event.
            </strong>
            <br />
            <br />
            We rarely see a client just once. Most of our clients come to us
            again and again, enabling us to develop a solid understanding of
            their business objectives. Virtually all of our new customers arrive
            by personal recommendation.
            <br />
            <br />
            Small agency care with big agency capabilities. Always delivering
            and going the extra mile to impress and stand out.
            <br />
          </p>
        </AboutTheBusiness>
      </SectionContainer>
      <SectionContainer>
        <SectionHeading align="center">Meet the team</SectionHeading>
        <TeamRowsContainer>
          <TeamRow cols={5}>
            <div className="img-container">
              <Image objectPosition="center" src={sam} />
              <div className="info">
                <h6>Sam Stockmans</h6>
                <p>Founder / CEO</p>
              </div>
            </div>
            <div className="img-container">
              <Image objectFit="cover" objectPosition="center" src={mark} />
              <div className="info">
                <h6>Mark Haverly</h6>
                <p>Founder / Managing Director</p>
              </div>
            </div>
            <div className="img-container">
              <Image objectFit="cover" objectPosition="center" src={malik} />
              <div className="info">
                <h6>Malik Mattu</h6>
                <p>Event Activation Executive</p>
              </div>
            </div>
            <div className="img-container">
              <Image objectFit="cover" objectPosition="center" src={erin} />
              <div className="info">
                <h6>Erin Brown</h6>
                <p>PR / Head of Artist Liaison</p>
              </div>
            </div>
            <div className="img-container">
              <Image objectFit="cover" objectPosition="center" src={luke} />
              <div className="info">
                <h6>Luke Meadows</h6>
                <p>Web Developer</p>
              </div>
            </div>
          </TeamRow>
          {/* <TeamRow cols={3}>
            <div className="img-container">
              <Image objectFit="cover" objectPosition="center" src={malik} />
              <div className="info">
                <h6>Malik Mattu</h6>
                <p>Event Activation Executive</p>
              </div>
            </div>
            <div className="img-container">
              <Image objectFit="cover" objectPosition="center" src={erin} />
              <div className="info">
                <h6>Erin Brown</h6>
                <p>PR / Head of Artist Liaison</p>
              </div>
            </div>
            <div className="img-container">
              <Image objectFit="cover" objectPosition="center" src={luke} />
              <div className="info">
                <h6>Luke Meadows</h6>
                <p>Web Developer</p>
              </div>
            </div>
          </TeamRow> */}
          <TeamRow cols={5}>
            <div className="img-container">
              <Image objectFit="cover" objectPosition="center" src={cam} />
              <div className="info">
                <h6>Cameron Cox</h6>
                <p>Videographer</p>
              </div>
            </div>
            <div className="img-container">
              <Image objectFit="cover" objectPosition="center" src={rich} />
              <div className="info">
                <h6>Rich Phillips</h6>
                <p>Photographer</p>
              </div>
            </div>

            <div className="img-container">
              <Image objectFit="cover" objectPosition="center" src={dan} />
              <div className="info">
                <h6>Dan Connolly</h6>
                <p>Web Developer</p>
              </div>
            </div>
            <div className="img-container">
              <Image objectFit="cover" objectPosition="center" src={frankie} />
              <div className="info">
                <h6>Frankie</h6>
                <p>Head of Customer Experience </p>
              </div>
            </div>
            <div className="img-container">
              <Image objectFit="cover" objectPosition="center" src={avatar} />
              <div className="info">
                <h6>Vacancy</h6>
                <p>Business Development Executive</p>
              </div>
            </div>
          </TeamRow>
          <TeamRow cols={5}>
            {/* <div className="img-container">
              <Image objectFit="cover" objectPosition="center" src={frankie} />
              <div className="info">
                <h6>Frankie</h6>
                <p>Head of Customer Experience </p>
              </div>
            </div>
            <div className="img-container">
              <Image objectFit="cover" objectPosition="center" src={avatar} />
              <div className="info">
                <h6>Vacancy</h6>
                <p>Business Development Executive</p>
              </div>
            </div> */}
            <div className="img-container">
              <Image objectFit="cover" objectPosition="center" src={avatar} />
              <div className="info">
                <h6>Vacancy</h6>
                <p>Social Media Marketing Executive </p>
              </div>
            </div>
          </TeamRow>
        </TeamRowsContainer>
      </SectionContainer>
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  background: white;
  padding: 5rem 0;
  @media only screen and (max-width: 415px) {
    padding-top: 5rem;
  }
`;

const AboutTheBusiness = styled.div`
  p {
    font-size: 1.4rem;
    text-align: center;
    font-weight: 100;
    padding: 0 var(--padding);
    max-width: 1500px;
    margin: 0 auto 1rem auto;
    @media only screen and (max-width: 715px) {
      font-size: 1rem;
      margin-bottom: 1rem;
  }
`;
const TeamRowsContainer = styled.div`
  margin-top: 4rem;
  @media only screen and (max-width: 715px) {
    margin-top: 1rem;
  }
`;
const TeamRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.cols}, 1fr)`};
  justify-items: center;
  margin: auto;
  width: fit-content;
  margin-bottom: var(--team-img-col-gap);
  gap: var(--team-img-grid-gap);

  @media only screen and (max-width: 715px) {
    grid-template-columns: none;
    grid-template-rows: repeat(1, 1fr);
  }
  .img-container {
    border-radius: 50rem;
    overflow: hidden;
    height: 250px;
    width: 250px;
    position: relative;
    @media only screen and (max-width: 715px) {
      overflow: initial;
    }
    @media only screen and (max-width: 1500px) {
      height: 200px;
      width: 200px;
    }
    @media only screen and (max-width: 1100px) {
      height: 200px;
      width: 200px;
    }
    @media only screen and (max-width: 500px) {
      height: 300px;
      width: 300px;
    }
    @media only screen and (max-width: 325px) {
      height: 250px;
      width: 250px;
    }
    img {
      height: 100%;
      weight: 100%;
      border-radius: 50rem;
    }
    &:hover {
      .info {
        visibility: initial;
      }
    }
    .info {
      position: absolute;
      visibility: hidden;
      z-index: 0;
      color: black;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.8);
      h6 {
        color: var(--pink);
        font-weight: 400;
        font-size: 1.2rem;
      }
      p {
        color: var(--white);
        font-weight: 100;
        text-align: center;
        font-size: 1rem;
        padding: 0 0.5rem;
      }
      @media only screen and (max-width: 715px) {
        position: relative;
        visibility: initial;
        height: fit-content;
        /* border: 1px solid black; */
        background: none;
        color: black;
        margin-top: 0.5rem;
        p {
          color: black;
        }
      }
    }
  }
`;
