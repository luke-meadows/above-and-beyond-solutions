import Image from 'next/image';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

export default function ImagePreview({
  currentImgIdx,
  imgs,
  setImgPreviewActive,
  increasePagination,
}) {
  function handleSwipe(idx) {
    if (imgs.length - 1 === idx) increasePagination();
  }
  return (
    <StyledPreview>
      <Close onClick={() => setImgPreviewActive(false)}>
        <i className="icon-cancel" />
      </Close>
      <Swiper
        modules={[Navigation, A11y]}
        slidesPerView={1}
        navigation
        loop
        initialSlide={parseInt(currentImgIdx)}
        loopPreventsSlide={true}
        className="Swiper"
        onSlideChange={(swiper) => handleSwipe(swiper.realIndex)}
      >
        {imgs.map((img, i) => {
          const large =
            img.attributes.image.data.attributes.formats?.large?.url;
          const medium =
            img.attributes.image.data.attributes.formats?.medium?.url;
          const small =
            img.attributes.image.data.attributes.formats?.small?.url;
          return (
            <SwiperSlide key={i}>
              <ImageContainer>
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={large ? large : medium ? medium : small}
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
  width: 100%;
  height: calc(100vh - var(--header-height));

  // Swiper Styles
  .swiper-slide {
    position: relative;
    color: white;
    height: calc(95vh - var(--header-height));
    width: 100vw;
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
  @media only screen and (max-width: 1200px) {
    min-width: 80%;
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
