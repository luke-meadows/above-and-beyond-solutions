import Image from 'next/image';
import { useEffect, useState } from 'react';
import image from '../public/assets/servicesCardImgs/activation.png';
import styled from 'styled-components';
export default function ImageGallery({ imgs }) {
  const [pagination, setPagination] = useState(0);
  const [visibleImgs, setVisibleImgs] = useState([]);
  useEffect(() => {
    setVisibleImgs(imgs.slice(pagination * 8, pagination * 8 + 8));
  }, [pagination]);

  return (
    <div>
      <ImageContainer>
        {visibleImgs.map((img) => (
          <div key={img}>
            <Image objectFit="cover" layout="responsive" src={img} />
          </div>
        ))}
      </ImageContainer>
      <ButtonContainer>
        <button onClick={() => setPagination(pagination - 1)}>Prev</button>
        <p>1/8</p>
        <button onClick={() => setPagination(pagination + 1)}>Next</button>
      </ButtonContainer>
    </div>
  );
}

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  div {
    img {
      height: 100%;
      width: 100%;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  margin: 2rem auto 0 auto;
  * {
    margin: 0 1rem;
  }
  p {
    font-weight: 300;
  }
`;
