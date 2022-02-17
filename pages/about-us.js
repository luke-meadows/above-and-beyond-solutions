import Image from 'next/image';
import { useContext, useEffect } from 'react';
import { Ctx } from '../lib/ctxProvider';
import styled from 'styled-components';
import img from '../public/assets/profile-imgs/alice.webp';
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
      <h2>About Us</h2>
      <AboutTheBusiness>
        <p>
          Above & Beyond Solutions love events. We are passionate about them and
          take each one personally. Our passion and dedication, combined with
          the experience of our in-house event specialists enables us to exceed
          client expectations.
          <br />
          <br />
          We make it our priority to understand our client’s objectives, working
          alongside clients from concept to completion to create a unique and
          memorable event.
          <br />
          <br />
          We rarely see a client just once. Most of our clients come to us again
          and again, enabling us to develop a solid understanding of their
          business objectives. Virtually all of our new customers arrive by
          personal recommendation.
          <br />
          <br />
          Small agency care with big agency capabilities. Always delivering and
          going the extra mile to impress and stand out.
          <br />
        </p>
      </AboutTheBusiness>
      <h2>Meet the Team</h2>
      <TeamRowsContainer>
        <TeamRow cols={2}>
          <div className="img-container">
            <Image objectPosition="center" src={img} />
            <div className="info">
              <h6>Sam Stockmans</h6>
              <p>Founder / CEO</p>
            </div>
          </div>
          <div className="img-container">
            <Image objectFit="cover" objectPosition="center" src={img} />
            <div className="info">
              <h6>Mark Haverly</h6>
              <p>Founder / Managing Director</p>
            </div>
          </div>
        </TeamRow>
        <TeamRow cols={3}>
          <div className="img-container">
            <Image objectFit="cover" objectPosition="center" src={img} />
            <div className="info">
              <h6>Malik Mattu</h6>
              <p>Event Activation Executive</p>
            </div>
          </div>
          <div className="img-container">
            <Image objectFit="cover" objectPosition="center" src={img} />
            <div className="info">
              <h6>Erin Brown</h6>
              <p>PR / Head of Artist Liaison</p>
            </div>
          </div>
          <div className="img-container">
            <Image objectFit="cover" objectPosition="center" src={img} />
            <div className="info">
              <h6>Luke Meadows</h6>
              <p>Web Development Manager</p>
            </div>
          </div>
        </TeamRow>
        <TeamRow cols={3}>
          <div className="img-container">
            <Image objectFit="cover" objectPosition="center" src={img} />
            <div className="info">
              <h6>Cameron Cox</h6>
              <p>Videographer</p>
            </div>
          </div>
          <div className="img-container">
            <Image objectFit="cover" objectPosition="center" src={img} />
            <div className="info">
              <h6>Rich Phillips</h6>
              <p>Photographer</p>
            </div>
          </div>
          <div className="img-container">
            <Image objectFit="cover" objectPosition="center" src={img} />
            <div className="info">
              <h6>Frankie</h6>
              <p>Head of Customer Experience </p>
            </div>
          </div>
        </TeamRow>
        <TeamRow cols={3}>
          <div className="img-container">
            <Image objectFit="cover" objectPosition="center" src={img} />
            <div className="info">
              <h6>Jenny Forbes</h6>
              <p>Sponsorship & Partnership</p>
            </div>
          </div>
          <div className="img-container">
            <Image objectFit="cover" objectPosition="center" src={img} />
            <div className="info">
              <h6>Dan Connolly</h6>
              <p>Web Developer</p>
            </div>
          </div>
          <div className="img-container">
            <Image objectFit="cover" objectPosition="center" src={img} />
            <div className="info">
              <h6>Darren New</h6>
              <p>Production / Events</p>
            </div>
          </div>
        </TeamRow>
      </TeamRowsContainer>
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  padding-top: 6rem;
  max-width: 90rem;
  margin: auto;
  @media only screen and (max-width: 415px) {
    padding-top: 5rem;
  }
  h2 {
    line-height: 1;
    font-weight: 500;
    padding: 4rem var(--padding);
    text-align: center;
    font-size: var(--section-heading-text);
    color: var(--pink);
    @media only screen and (max-width: 415px) {
      padding: 1rem var(--padding);
    }
  }
`;

const AboutTheBusiness = styled.div`
  p {
    font-size: 1.4rem;
    text-align: center;
    font-weight: 300;
    padding: 0 var(--padding);
    @media only screen and (max-width: 415px) {
      font-size: 1rem;
  }
`;
const TeamRowsContainer = styled.div`
  @media only screen and (max-width: 415px) {
    margin-top: 1rem;
  }
`;
const TeamRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.cols}, 1fr)`};
  gap: 12rem;
  justify-items: center;
  margin: auto;
  width: fit-content;
  margin-bottom: 6rem;
  @media only screen and (max-width: 1600px) {
    gap: 6rem;
  }
  @media only screen and (max-width: 415px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .img-container {
    border-radius: 50rem;
    overflow: hidden;
    height: 400px;
    width: 400px;
    position: relative;
    @media only screen and (max-width: 415px) {
      overflow: initial;
      min-height: 350px;
    }
    @media only screen and (max-width: 1600px) {
      height: 300px;
      width: 300px;
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
        font-size: 1.4rem;
      }
      p {
        color: var(--white);
      }
      @media only screen and (max-width: 415px) {
        position: relative;
        visibility: initial;
        height: fit-content;
        padding: 1rem;
      }
    }
  }
`;
