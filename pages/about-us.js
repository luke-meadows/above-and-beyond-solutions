import Image from 'next/image';
import styled from 'styled-components';
import img from '../public/assets/profile-imgs/alice.webp';
export default function AboutUs() {
  return (
    <StyledAbout>
      <h2>About Us</h2>
      <AboutTheBusiness>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
          pariatur tenetur nisi corporis porro! Molestiae, ipsam vero accusamus
          provident eius, reiciendis necessitatibus odio enim beatae quibusdam
          quos temporibus magnam, exercitationem recusandae. Blanditiis illum
          perspiciatis hic eos tempore quasi, ipsa suscipit repellat cumque
          eaque expedita inventore dolore ab labore placeat sunt odit quam illo.
          Asperiores dignissimos, dolores vitae dolorum commodi laborum ipsa,
          reiciendis explicabo dolor deserunt architecto totam! Maiores, porro
          sed? Minima laborum inventore quidem libero, excepturi quod. Porro,
          beatae ullam a neque, ab accusamus dolor perferendis officiis
          molestiae rerum sed, corporis quos sapiente tenetur mollitia quae qui
          reprehenderit! Distinctio, impedit.
        </p>
      </AboutTheBusiness>
      <h2>Meet the Team</h2>
      <TeamRow cols={2}>
        <div className="img-container">
          <Image objectFit="cover" objectPosition="center" src={img} />
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
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  padding-top: 6rem;
  h2 {
    line-height: 1;
    font-weight: 500;
    padding: 4rem 5rem;
    text-align: center;
    font-size: 2.1rem;
    color: var(--pink);
  }
`;

const AboutTheBusiness = styled.div`
  p {
    font-size: 1.2rem;
    text-align: center;
    font-weight: 300;
    padding: 0 5rem;
  }
`;

const TeamRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.cols}, 1fr)`};
  gap: 6rem;
  justify-items: center;
  margin: auto;
  width: fit-content;
  margin-bottom: 6rem;
  .img-container {
    border-radius: 50rem;
    overflow: hidden;
    height: 300px;
    width: 300px;
    position: relative;

    img {
      height: 100%;
      weight: 100%;
    }
    &:hover {
      .info {
        visibility: initial;
      }
    }
    .info {
      position: absolute;
      visibility: hidden;
      z-index: 2;
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
    }
  }
`;
