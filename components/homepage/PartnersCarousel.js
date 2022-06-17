import styled from 'styled-components';
import { Autoplay, Grid } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { partnerImgs } from '../../lib/partnerImgs';
import { Container } from '../../styles/GlobalStyles';
import 'swiper/css/grid';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

export default function PartnersCarousel() {
  return (
    <Container2>
      <Partners>
        <h4>
          Brands we&apos;ve gone <span> Above & Beyond </span> for...
        </h4>
        <ContainerSwiper>
          <Swiper
            modules={[Grid, Autoplay]}
            grid={{
              rows: 2,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={8}
            slidesPerGroup={2}
            spaceBetween={50}
            className="mySwiper"
          >
            {partnerImgs.map((img, i) => {
              const rando = uuidv4();
              return (
                <SwiperSlide key={rando}>
                  <Image
                    title="Our Partner"
                    alt="partner image"
                    layout="fill"
                    objectFit="contain"
                    src={img}
                    priority
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </ContainerSwiper>
        <MobileContainerSwiper>
          <Swiper
            modules={[Grid, Autoplay]}
            grid={{
              rows: 2,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={4}
            slidesPerGroup={2}
            spaceBetween={30}
            className="mySwiper"
          >
            {partnerImgs.map((img, i) => {
              const rando = uuidv4();
              return (
                <SwiperSlide key={rando}>
                  <Image
                    title="Our Partner"
                    alt="partner image"
                    layout="fill"
                    objectFit="contain"
                    src={img}
                    priority
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </MobileContainerSwiper>
      </Partners>
    </Container2>
  );
}

const Container2 = styled(Container)`
  padding: 4rem 6rem;
  @media only screen and (max-width: 1250px) {
    padding: 1rem 2rem 2rem 2rem;
  }
`;
const MobileContainerSwiper = styled.div`
  display: none;
  height: 6rem;
  @media only screen and (max-width: 850px) {
    display: block;
  }
`;
const ContainerSwiper = styled.div`
  height: 18rem;
  margin-top: 4rem;
  @media only screen and (max-width: 1250px) {
    margin-top: 2rem;
  }
  @media only screen and (max-width: 850px) {
    display: none;
  }
`;
const Partners = styled.div`
  h4 {
    font-size: 1.777rem;
    color: var(--black);
    span {
      color: var(--pink);
    }
  }

  @media only screen and (max-width: 850px) {
    h4 {
      font-size: 1rem;
      margin-top: 1rem;
    }
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    height: calc((100% - 50px) / 2) !important;
  }
  @media only screen and (max-width: 850px) {
    .swiper-slide {
      height: calc((100% - 30px) / 2) !important;
      display: grid;
    }
  }
`;
