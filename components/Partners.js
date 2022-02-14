import { partnerImgs } from '../lib/partnerImgs';
import styled from 'styled-components';
import Image from 'next/image';

export default function Partners() {
  return (
    <StyledPartners>
      <h2>Our Partners</h2>
      <div className="container">
        {partnerImgs.map((img, i) => (
          <div key={i} className="hello">
            <div data-number={i + 1} className="image-container">
              <Image src={img} />
            </div>
          </div>
        ))}
      </div>
    </StyledPartners>
  );
}

const StyledPartners = styled.div`
  height: fit-content;
  margin: 2rem 5rem;

  h2 {
    line-height: 1;
    font-weight: 500;
    padding: 2rem 5rem 3rem 5rem;
    text-align: center;
    font-size: 2.1rem;
    color: var(--pink);
  }

  .container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 6rem;
    .img-container {
      display: flex;
    }
    .hello {
      display: flex;
      align-items: center;
    }
  }
`;
