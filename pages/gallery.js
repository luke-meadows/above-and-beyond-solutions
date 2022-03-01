import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Ctx } from '../lib/ctxProvider';
import { SectionHeading } from '../styles/GlobalStyles';
export default function gallery({ imgs, section }) {
  const { setShouldStick, setStickyNavCoords } = useContext(Ctx);

  useEffect(() => {
    setShouldStick(true);
    setStickyNavCoords(0);
    return () => {
      setShouldStick(false);
    };
  });
  return (
    <StyledGallery>
      <SectionHeading align="center">Gallery - {section}</SectionHeading>
      {/* // need to pass in imgs arr // need to display first 12 imgs // on next
      need to display next 12 imgs */}
    </StyledGallery>
  );
}

const StyledGallery = styled.section`
  min-height: 100vh;
  backgroun
`;
