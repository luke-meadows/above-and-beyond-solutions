import Image from 'next/image';
import styled from 'styled-components';
export default function ServiceBackgroundImage({ img, brightness, position }) {
  return (
    <ImageContainer brightness={brightness}>
      <Image
        layout="fill"
        src={img}
        alt=""
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
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0rem;
`;
