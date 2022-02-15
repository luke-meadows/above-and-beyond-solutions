import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Ctx } from '../lib/ctxProvider';
import Partners from '../components/Partners';

export default function PartnersPage() {
  const { setShouldStick } = useContext(Ctx);
  useEffect(() => {
    setShouldStick(true);
    return () => {
      setShouldStick(false);
    };
  });
  return (
    <StyledAbout>
      <h2>Our Partners</h2>
      <AboutPartners>
        <p>
          <strong>
            {' '}
            We work with a range of different companies in a diverse set of
            industries.... etc etc
          </strong>{' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id
          iure ipsam dolorem, asperiores, eligendi excepturi exercitationem
          soluta quibusdam delectus praesentium nostrum cumque, nihil dolore?
          Perferendis inventore aperiam error repellendus modi voluptatum quam
          illum. Sunt dolore nemo alias reprehenderit ipsam expedita animi!
          Aperiam, quasi necessitatibus ipsum cum mollitia, tempore perspiciatis
          ratione quos, at nemo voluptatibus odio beatae nihil. Mollitia
          laboriosam atque ipsa ab provident repellendus doloremque nemo! Quidem
          dolor nihil eaque mollitia similique nesciunt iure!
        </p>
      </AboutPartners>
      <Partners noTitle={true} />
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  padding-top: 6rem;
  h2 {
    line-height: 1;
    font-weight: 500;
    padding: 4rem 5rem;
    text-align: center;
    font-size: 2.1rem;
    color: var(--pink);
  }
`;

const AboutPartners = styled.div`
  p {
    font-size: 1.2rem;
    text-align: center;
    font-weight: 300;
    padding: 0 5rem;
  }
`;
