import { partnerImgs } from '../lib/partnerImgs';
import styled from 'styled-components';
import Image from 'next/image';

export default function Partners({ noTitle }) {
  return (
    <StyledPartners>
      {!noTitle && <h2>Our Partners</h2>}
      <div className="container">
        {partnerImgs.map((img, i) => (
          <div key={i} className="img-container">
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
  padding: 0 var(--padding);

  h2 {
    line-height: 1;
    font-weight: 500;
    padding: 4rem var(--padding) 2rem var(--padding);
    text-align: center;
    font-size: var(--section-heading-text);
    color: var(--pink);
  }

  .container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: var(--partners-grid-gap);
    .img-container {
      display: flex;
      align-items: center;
    }
  }
`;
