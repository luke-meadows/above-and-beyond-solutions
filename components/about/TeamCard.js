import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
export default function TeamCard({ member }) {
  const [cardActive, setCardActive] = useState(false);
  const [buttonText, setButtonText] = useState('Learn More');
  useEffect(() => {
    if (cardActive) {
      setButtonText('Minimise');
      return;
    } else {
      setButtonText('Learn More');
    }
  }, [cardActive]);
  return (
    <StyledTeamCard cardActive={cardActive}>
      <div className="top">
        <div className="image-container">
          <Image src={member.img} layout="fill" objectFit="cover" />
        </div>
        <div className="top-info">
          <h6>{member.name}</h6>
          <p>{member.role}</p>
          <div className="team-card-buttons">
            <a className="icon-container" href={member.linkedIn}>
              <i className="icon icon-linkedin" />
            </a>
            <a className="icon-container" href={`mailto:${member.email}`}>
              <i className="icon icon-mail" />
            </a>
          </div>
        </div>
      </div>
      <div className="bottom">
        {/* <p>{member.description}</p> */}
        {/* <div className="blur"></div> */}
      </div>
    </StyledTeamCard>
  );
}

const StyledTeamCard = styled.div`
  overflow-y: scroll;
  min-height: 100%;
  /* aspect-ratio: 1; */
  padding: 2rem;
  color: var(--white);
  transition: max-width 0.4s ease;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
  background: var(--black);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .top {
    display: flex;
    gap: 1rem;
    color: var(--white);
    h6 {
      font-size: 1.7rem;
      color: var(--pink);
      margin-bottom: -0.5rem;
    }
    .team-card-buttons {
      display: flex;
      align-items: center;
      gap: 1rem;
      .button {
        font-size: 0.8rem;
        display: inline-block;
        position: relative;
        background: var(--white);
        width: 100%;
        color: black;
        font-weight: 300;
        padding: 0.25rem 0;
        border-radius: 2px;
        text-align: center;
        color: var(--black);
        cursor: pointer;
      }
    }
    .icon-container {
      background: var(--white);
      width: fit-content;
      aspect-ratio: 1;
      width: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 2px;
      cursor: pointer;
    }
    i {
      color: var(--black);
    }
  }
  .top-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .bottom {
    overflow: hidden;
    position: relative;
    .blur {
      position: absolute;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.8);
      width: 100%;
      height: 0.8rem;
      display: ${(props) => (props.cardActive ? 'none' : 'initial')};
    }
    p {
      font-size: 1rem;
      font-weight: 200;
      overflow: hidden;
    }
    @media only screen and (max-width: 1030px) {
      p {
        font-size: 0.85rem;
      }
    }
    @media only screen and (max-width: 900px) {
      p {
        font-size: 1rem;
      }
    }
  }
  @media only screen and (max-width: 900px) {
    padding: 1rem;
    .top-info {
      justify-content: flex-start;
      gap: 0.5rem;
    }
  }

  .image-container {
    position: relative;
    width: 8rem;
    height: 8rem;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 2px;
    border-bottom-left-radius: 2px;
    overflow: hidden;
  }

  .card-active {
  }
  @media only screen and (max-width: 600px) {
    h6 {
      font-size: 1rem !important;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;
