import { partnerImgs } from '../lib/partnerImgs';
import styled from 'styled-components';
import Image from 'next/image';
import { SectionHeading } from '../styles/GlobalStyles';

export default function Partners({ noTitle }) {
  return (
    <StyledPartners>
      {!noTitle && <SectionHeading>Our Partners</SectionHeading>}
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
