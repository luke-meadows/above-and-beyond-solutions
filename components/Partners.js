import { partnerImgs } from '../lib/partnerImgs';
import styled from 'styled-components';
import Image from 'next/image';

export default function Partners() {
  return (
    <StyledPartners>
      <div className="container">
        {partnerImgs.map((img, i) => (
          <div key={i} className="img-container">
            <div data-number={i + 1} className="image-container">
              <Image
                title="Our Partner"
                alt="partner image"
                layout="intrinsic"
                src={img}
              />
            </div>
          </div>
        ))}
      </div>
    </StyledPartners>
  );
}

const StyledPartners = styled.div`
  padding: 2rem 0 0 0;
  height: fit-content;
  background: white;
  .container {
    display: grid;
    grid-template-columns: var(--partners-grid-template-cols);
    gap: var(--partners-grid-gap);
    .img-container {
      display: flex;
      align-items: center;
    }
  }
`;
