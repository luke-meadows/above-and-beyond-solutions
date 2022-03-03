import styled from 'styled-components';
import { SectionHeading } from '../../styles/GlobalStyles';
import { useContext, useEffect } from 'react';
import { Ctx } from '../../lib/ctxProvider';
import ImageGallery from '../../components/ImageGallery';
import {
  exhibitionImgs,
  eventsImgs,
  activationsImgs,
} from '../../lib/galleryImgs';

export default function Galleries({ query }) {
  const { setShouldStick, setStickyNavCoords } = useContext(Ctx);
  const galleries = {
    exhibitions: exhibitionImgs,
    activations: activationsImgs,
    'live-events': eventsImgs,
  };
  useEffect(() => {
    setShouldStick(true);
    setStickyNavCoords(0);
    return () => {
      setShouldStick(false);
    };
  });

  return (
    <StyledGallery>
      <SectionHeading align="center" style={{ marginBottom: '2rem' }}>
        Gallery -{' '}
        {query.id[0].toUpperCase() + query.id.substring(1).replace('-', ' ')}
      </SectionHeading>
      <ImageGallery imgs={galleries[query.id]} />
    </StyledGallery>
  );
}

const StyledGallery = styled.section`
  min-height: 100vh;
  background: white;
  padding: 7rem var(--padding) 4rem var(--padding);
  min-height: 100vh;
`;
