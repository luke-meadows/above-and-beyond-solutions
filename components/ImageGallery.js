import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImagePreview from './ImagePreview';
import { useInView } from 'react-intersection-observer';
export default function ImageGallery({
  imgs,
  setPagination,
  total,
  pagination,
}) {
  const [imgPreviewActive, setImgPreviewActive] = useState(false);
  const [currentImgIdx, setCurrentImgIdx] = useState();

  useEffect(() => {
    if (imgPreviewActive) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'initial';
    return () => (document.body.style.overflow = 'initial');
  }, [imgPreviewActive]);

  function handleImageClick(e) {
    setCurrentImgIdx(e.currentTarget.dataset.img);
    setImgPreviewActive(true);
  }

  // MORE PAGINATION WHEN SCROLL TO BOTTOM
  const { ref: paginationRef, inView } = useInView({
    threshold: 1,
  });

  function increasePagination() {
    if (imgs.length === total) return;
    setPagination(pagination + 12);
  }

  useEffect(() => {
    if (!imgs) return;
    if (inView) increasePagination();
  }, [inView]);

  return (
    <div>
      <ImagesContainer>
        {imgs?.map((img, i) => (
          <ImageContainer key={i} data-img={i} onClick={handleImageClick}>
            <Image
              objectFit="cover"
              layout="fill"
              src={img.attributes.image.data.attributes.formats.small.url}
              alt="gallery img"
              title="gallery img"
            />
          </ImageContainer>
        ))}
      </ImagesContainer>

      {imgPreviewActive && (
        <ImagePreview
          imgs={imgs}
          currentImgIdx={currentImgIdx}
          setCurrentImgIdx={setCurrentImgIdx}
          setImgPreviewActive={setImgPreviewActive}
          increasePagination={increasePagination}
        />
      )}
      <MorePagination ref={paginationRef} />
    </div>
  );
}

const ImagesContainer = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  div {
    cursor: pointer;
  }

  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 1;
`;

const MorePagination = styled.div`
  height: 2rem;
`;
