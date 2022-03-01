import { useEffect, useState } from 'react';
import styled from 'styled-components';
export default function ImageGallery({ imgs }) {
  const [pagination, setPagination] = useState(0);
  const [visibleImgs, setVisibleImgs] = useState([]);
  useEffect(() => {
    setVisibleImgs(imgs.slice(pagination * 12, pagination * 12 + 12));
  }, [pagination]);

  return (
    <div>
      <ButtonContainer>
        <button onClick={() => setPagination(pagination - 1)}>Prev</button>
        <button onClick={() => setPagination(pagination + 1)}>Next</button>
      </ButtonContainer>
      <ImageContainer>
        {visibleImgs.map((img) => (
          <h1 key={img}>{img}</h1>
        ))}
      </ImageContainer>
    </div>
  );
}

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  h1 {
    border: 1px solid blue;
  }
`;

const ButtonContainer = styled.div`
  border: 1px solid blue;
  display: flex;
  justify-content: flex-end;
  button {
    margin-left: 1rem;
  }
`;
