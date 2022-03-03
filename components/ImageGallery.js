import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImagePreview from './ImagePreview';
export default function ImageGallery({ imgs }) {
  const [pagination, setPagination] = useState(8);
  const [visibleImgs, setVisibleImgs] = useState([]);
  const [loadMoreDisabled, setLoadMoreDisabled] = useState(false);

  useEffect(() => {
    if (imgs.length < 8 || imgs.length - pagination < 8) {
      setVisibleImgs(imgs);
      setLoadMoreDisabled(true);
    } else {
      setVisibleImgs(imgs.slice(0, pagination));
      setLoadMoreDisabled(false);
    }
  }, [pagination, imgs]);

  function handleClick() {
    setPagination(pagination + 8);
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
          <div key={i} data-img={8} onClick={handleImageClick}>
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
        <button disabled={loadMoreDisabled} onClick={() => handleClick('prev')}>
          Load More
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
    opacity: 0;
  }
  @media only screen and (max-width: 700px) {
    width: 100%;
    * {
      margin: 0;
    }
  }
`;
