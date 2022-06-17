import { Container } from '../../styles/GlobalStyles';
import { useContext, useEffect, useState } from 'react';
import { Ctx } from '../../lib/ctxProvider';
import ImageGallery from '../../components/ImageGallery';
import {
  activationsImgs,
  allGalleryImgs,
  eventsImgs,
  exhibitionImgs,
} from '../../lib/galleryImgs';
import styled from 'styled-components';

export default function Gallery() {
  const { setShouldStick, setStickyNavCoords } = useContext(Ctx);

  useEffect(() => {
    setShouldStick(true);
    setStickyNavCoords(0);
    return () => {
      setShouldStick(false);
    };
  });

  const galleries = {
    all: allGalleryImgs,
    exhibitions: exhibitionImgs,
    activations: activationsImgs,
    'live-events': eventsImgs,
  };

  const [activeGallery, setActiveGallery] = useState(allGalleryImgs);

  function handleDropdown(e) {
    setActiveGallery([]);
    setActiveGallery(galleries[e.target.value]);
  }

  return (
    <Container>
      <StyledGallery>
        <GalleryHeader>
          <h1>Gallery</h1>
        </GalleryHeader>
        <select onChange={handleDropdown}>
          <option value="all">All</option>
          <option value="activations">Activations</option>
          <option value="exhibitions">Exhibitions</option>
          <option value="live-events">Live Events</option>
        </select>
        <ImageGallery imgs={activeGallery} />
      </StyledGallery>
    </Container>
  );
}

const StyledGallery = styled.section`
  min-height: 100vh;
  select {
    margin-top: 3rem;
    padding: 0.5rem;
    font-family: 'Nimbus Sans', sans-serif;
    font-weight: 100;
    box-sizing: border-box;
    background: var(--white);
    @media only screen and (max-width: 415px) {
      font-size: 16px;
    }
    &:focus {
      outline: none;
      border: 1px solid black;
    }
  }
`;

const GalleryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo-container {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;
