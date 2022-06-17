import Image from 'next/image';
import styled from 'styled-components';
export default function ServiceHeroImage({ img, brightness, position }) {
  return (
    <ImageContainer brightness={brightness}>
      <Image
        layout="fill"
        src={img}
        alt="services-img"
        objectPosition={position}
        objectFit="cover"
      />
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  filter: ${(props) => `brightness(${props.brightness})`};
  z-index: 0;
  position: absolute;
  left: 0;
  z-index: 1;
`;
