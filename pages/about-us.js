import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import { Ctx } from '../lib/ctxProvider';
import { teamData } from '../lib/teamData';
import AboutHeader from '../components/about/AboutHeader';
import { Container } from '../styles/GlobalStyles';
import TeamCard from '../components/about/TeamCard';

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
    <Container>
      <AboutHeader />
      <TeamContainer>
        <TeamCard member={teamData.sam} />
        <TeamCard member={teamData.jenny} />
        <TeamCard member={teamData.dan} />
        <TeamCard member={teamData.magda} />
        <TeamCard member={teamData.callum} />
        <TeamCard member={teamData.luke} />
        <TeamCard member={teamData.rich} />
        <TeamCard member={teamData.cam} />
      </TeamContainer>
    </Container>
  );
}

const TeamContainer = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row: auto;
  gap: 2rem;
  width: 100%;
  @media only screen and (max-width: 1550px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
  }
`;
