import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImagePreview from './ImagePreview';
export default function ImageGallery({ imgs }) {
  const [pagination, setPagination] = useState(0);
  const [visibleImgs, setVisibleImgs] = useState([]);
  useEffect(() => {
    setVisibleImgs(imgs.slice(pagination * 8, pagination * 8 + 8));
  }, [pagination]);

  function handleClick(direction) {
    window.scrollTo(0, 0);
    if (direction === 'next') {
      setPagination(pagination + 1);
    } else {
      setPagination(pagination - 1);
    }
  }

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

  return (
    <div>
      <ImagesContainer>
        {visibleImgs.map((img, i) => (
          <div key={i} data-img={i + pagination * 8} onClick={handleImageClick}>
            <Image
              objectFit="cover"
              layout="responsive"
              width={400}
              height={400}
              src={img}
              placeholder={img.blurDataURL}
            />
          </div>
        ))}
      </ImagesContainer>
      <ButtonContainer>
        <button disabled={pagination === 0} onClick={() => handleClick('prev')}>
          Prev
        </button>
        <p>
          {pagination + 1}/{Math.ceil(imgs.length / 8)}
        </p>
        <button
          disabled={pagination > Math.ceil(imgs.length / 8) - 2}
          onClick={() => {
            handleClick('next');
          }}
        >
          Next
        </button>
      </ButtonContainer>
      {imgPreviewActive && (
        <ImagePreview
          imgs={imgs}
          currentImgIdx={currentImgIdx}
          setCurrentImgIdx={setCurrentImgIdx}
          setImgPreviewActive={setImgPreviewActive}
        />
      )}
    </div>
  );
}

const ImagesContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1rem;
  div {
    cursor: pointer;
  }

  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  margin: 4rem auto 0 auto;
  * {
    margin: 0 1rem;
  }
  p {
    font-weight: 300;
  }
  button[disabled] {
    filter: brightness(0.5);
    pointer-events: none;
  }
  @media only screen and (max-width: 700px) {
    width: 100%;
    * {
      margin: 0;
    }
  }
`;
