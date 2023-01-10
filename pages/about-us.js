import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import { Ctx } from '../lib/ctxProvider';
import { teamData } from '../lib/teamData';
import TeamMember from '../components/about/TeamMember';
import AboutHeader from '../components/about/AboutHeader';
import { Container } from '../styles/GlobalStyles';

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
        <TeamMember teamMember={teamData.sam} />
        <TeamMember teamMember={teamData.jenny} />
        <TeamMember teamMember={teamData.callum} />
        <TeamMember teamMember={teamData.luke} />
        <TeamMember teamMember={teamData.rich} />
        <TeamMember teamMember={teamData.cam} />
      </TeamContainer>
    </Container>
  );
}

const TeamContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
