import { SectionHeading } from '../../styles/GlobalStyles';
import { useContext, useEffect, useState } from 'react';
import { Ctx } from '../../lib/ctxProvider';
import ImageGallery from '../../components/ImageGallery';
import { allGalleryImgs } from '../../lib/galleryImgs';
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

  return (
    <StyledGallery>
      <SectionHeading align="center">Gallery</SectionHeading>
      <ImageGallery imgs={allGalleryImgs} />
    </StyledGallery>
  );
}

const StyledGallery = styled.section`
  min-height: 100vh;
  background: white;
  padding: 7rem var(--padding) 4rem var(--padding);
  min-height: 100vh;
`;
