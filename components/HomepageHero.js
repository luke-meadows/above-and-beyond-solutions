import styled from 'styled-components';

export default function HomepageHero() {
  return (
    <StyledHero>
      <video
        autoPlay
        muted
        loop
        src={require('../public/assets/HERO-NO-SWEARING.mp4')}
        type="video/mp4"
      />
      <div className="overlay">
        <div className="overlay-container">
          <h2>Get Creative</h2>
          <p>
            We’re a <span>Digital Marketing Agency in Coventry</span>, made up
            of a group of passionate individuals who get excited about helping
            small to medium sized businesses create impact with their customers.
          </p>
        </div>
      </div>
    </StyledHero>
  );
}

const StyledHero = styled.div`
  height: calc(100vh - 10rem);
  position: relative;
  margin-top: 10rem;
  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .overlay {
    background: rgba(0, 0, 0, 0.5);
    background-image: radial-gradient(black 33%, transparent 33%);
    background-size: 3px 3px;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    .overlay-container {
      position: absolute;
      top: 40%;
      left: 5rem;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      color: white;
      h2 {
        font-size: 7rem;
        font-weight: 800;
        line-height: initial;
        padding: 0;
        margin-left: -0.8rem;
      }
      p {
        font-weight: 500;
        font-size: 1.5rem;
        max-width: 80%;
        line-height: 2;
      }
      span {
        color: var(--pink);
      }
      a {
        text-decoration: none;
      }
      .explore {
        background: rgba(0, 0, 0, 0.8);
        color: white;
        width: fit-content;
        padding: 1.5rem;
        margin-top: 2rem;
        cursor: pointer;
        i {
          margin-left: 0.1rem;
          font-size: 1.2rem;
        }
      }
    }
  }
`;
