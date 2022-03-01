import styled from 'styled-components';
import { SectionHeading } from '../../styles/GlobalStyles';
import { useContext, useEffect } from 'react';
import { Ctx } from '../../lib/ctxProvider';
import ImageGallery from '../../components/ImageGallery';
import { exhibitionImgs } from '../../lib/galleryImgs';

export default function Galleries({ query }) {
  const { setShouldStick, setStickyNavCoords } = useContext(Ctx);

  useEffect(() => {
    setShouldStick(true);
    setStickyNavCoords(0);
    return () => {
      setShouldStick(false);
    };
  });
  // useEffect(()=> {

  //   const imgs = exhibitions
  // },[query])
  return (
    <StyledGallery>
      <SectionHeading align="center">
        Gallery - {query.id[0].toUpperCase() + query.id.substring(1)}
      </SectionHeading>
      <ImageGallery imgs={exhibitionImgs} />
    </StyledGallery>
  );
}

const StyledGallery = styled.section`
  min-height: 100vh;
  background: white;
  padding: 7rem var(--padding) 4rem var(--padding);
`;
