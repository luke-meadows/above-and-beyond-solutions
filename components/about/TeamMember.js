import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import LinkedIn from './LinkedIn';
export default function TeamMember({ teamMember }) {
  const [active, setActive] = useState(false);
  return (
    <Member
      href={teamMember.linkedIn}
      target="blank"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      active={active}
    >
      <>
        <div className="image-container">
          <Image src={teamMember.img} layout="responsive" objectFit="cover" />
          <LinkedIn active={active} />
        </div>
        <div className="text-container">
          <h5>
            {teamMember.name} / <span>{teamMember.role}</span>
          </h5>
          <p>{teamMember.description}</p>
        </div>
      </>
    </Member>
  );
}

const Member = styled.a`
  cursor: pointer;
  display: flex;
  /* align-items: center; */

  .image-container {
    position: relative;
    min-width: 12rem;
    margin-right: 2rem;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.25);
  }
  .text-container {
    h5 {
      margin: 0.5rem 0 1rem 0;
      color: var(--pink);
      text-align: left;
    }
    p {
      text-align: left;
      font-size: 1rem;
    }
  }
  @media only screen and (max-width: 800px) {
    display: block;
    .image-container {
      min-width: 6rem;
      width: 12rem;
      margin-bottom: 2rem;
    }
  }
`;
