import { Container } from '../../styles/GlobalStyles';
import { useContext, useEffect, useState } from 'react';
import { Ctx } from '../../lib/ctxProvider';
import ImageGallery from '../../components/ImageGallery';
import styled from 'styled-components';
import { useQuery } from 'urql';
import GalleryOptions from '../../components/gallery/GalleryOptions';
import { IMAGE_QUERY } from '../../lib/queries';

import { imgs } from '../../lib/galleryImgs';

export default function Gallery() {
  // STICKY NAV
  const { setShouldStick, setStickyNavCoords } = useContext(Ctx);
  useEffect(() => {
    setShouldStick(true);
    setStickyNavCoords(0);
    return () => {
      setShouldStick(false);
    };
  });

  // GALLERY
  const [galleryImgs, setGalleryImgs] = useState();
  const [activeOption, setActiveOption] = useState(undefined);
  const [pagination, setPagination] = useState(12);
  const [total, setTotal] = useState(12);

  useEffect(() => {
    console.log(pagination);
    if (activeOption === 'all' || !activeOption) {
      setGalleryImgs(imgs.slice(0, pagination));
      setTotal(imgs.length);
    } else {
      const filteredImgs = imgs.filter((img) => img.cat === activeOption);
      setGalleryImgs(filteredImgs.slice(0, pagination));
      setTotal(filteredImgs.length);
    }
  }, [activeOption, pagination]);

  useEffect(() => {
    setPagination(12);
    return () => setPagination(12);
  }, [activeOption]);

  return (
    <Container>
      <StyledGallery>
        <GalleryHeader>
          <h1>Gallery</h1>
        </GalleryHeader>
        <GalleryOptions
          activeOption={activeOption}
          setActiveOption={setActiveOption}
          setPagination={setPagination}
        />
        <ImageGallery
          imgs={galleryImgs}
          total={total}
          pagination={pagination}
          setPagination={setPagination}
        />
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
  .controls {
    display: flex;
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
