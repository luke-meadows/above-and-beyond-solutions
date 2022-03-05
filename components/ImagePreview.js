import Image from 'next/image';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

export default function ImagePreview({
  currentImgIdx,
  imgs,
  setImgPreviewActive,
}) {
  return (
    <StyledPreview>
      <Close onClick={() => setImgPreviewActive(false)}>
        <i className="icon-cancel" />
      </Close>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        loop
        initialSlide={parseInt(currentImgIdx)}
      >
        {imgs.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <ImageContainer>
                <Image
                  layout="fill"
                  objectFit="contain"
                  src={img}
                  placeholder={img.blurDataURL}
                  alt="preview image"
                  title="preview image"
                />
              </ImageContainer>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledPreview>
  );
}

const StyledPreview = styled.div`
  position: fixed;
  top: var(--header-height);
  left: 0;
  background: rgba(0, 0, 0, 0.9);
  height: 100%;
  width: 100%;

  // Swiper Styles

  .swiper-container {
    width: 100%;
    height: 100vh;
    position: relative;
  }

  .swiper-slide {
    color: white;
    height: 100vh;
    max-width: 100vw;

    /* border: 3px solid blue; */
  }

  .swiper-button-next,
  .swiper-button-prev {
    padding: 0 60px;
    color: var(--pink) !important;
    @media only screen and (max-width: 1200px) {
      display: none;
    }
  }
`;

const ImageContainer = styled.div`
  width: 60rem;
  height: 35rem;
  position: absolute;
  top: 44%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 1200px) {
    width: 30rem;
    height: 15rem;
  }
  @media only screen and (max-width: 650px) {
    width: 25rem;
    height: 12.5rem;
  }
`;

const Close = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 3;
  i {
    color: white;
    font-size: 2rem;
    cursor: pointer;
    &:hover {
      color: var(--pink);
    }
  }
`;
