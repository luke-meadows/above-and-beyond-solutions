import { partnerImgs } from '../lib/partnerImgs';
import styled from 'styled-components';
import Image from 'next/image';

export default function Partners() {
  return (
    <StyledPartners>
      <h3>Our Partners</h3>
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
  margin: 3rem 5rem;

  h3 {
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    text-align: center;
    font-weight: 300;
    font-size: 2rem;
    margin-bottom: 3rem;
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
