import { SectionHeading } from '../../styles/GlobalStyles';
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
import logo from '../../public/assets/logos/thumbnail-black-logo.svg';

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
    setActiveGallery(galleries[e.target.value]);
  }

  console.log(activeGallery);
  return (
    <StyledGallery>
      <SectionHeading align="center" style={{ marginBottom: '2rem' }}>
        Gallery
      </SectionHeading>
      <select onChange={handleDropdown}>
        <option value="all">All</option>
        <option value="activations">Activations</option>
        <option value="exhibitions">Exhibitions</option>
        <option value="live-events">Live Events</option>
      </select>
      <ImageGallery imgs={activeGallery} />
    </StyledGallery>
  );
}

const StyledGallery = styled.section`
  min-height: 100vh;
  background: white;
  padding: 7rem var(--padding) 4rem var(--padding);
  min-height: 100vh;
  select {
    padding: 0.5rem;
    font-family: 'Nimbus Sans', sans-serif;
    font-weight: 100;
    box-sizing: border-box;
    @media only screen and (max-width: 415px) {
      font-size: 16px;
    }
    &:focus {
      outline: none;
      border: 1px solid black;
    }
  }
`;
