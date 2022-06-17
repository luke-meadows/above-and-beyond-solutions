import styled from 'styled-components';
import Logo from '../../public/assets/logos/about-us-logo.png';
import Image from 'next/image';
import PageLogo from '../global/PageLogo';
export default function AboutHeader() {
  return (
    <StyledAboutHeader>
      <div>
        <h1>
          Who <span>we</span> are
        </h1>
        <p>
          Our team are here to help you create memorable experiences, showcase
          your brand and elevate your business. From event activation to
          sponsorship acquisition; from exhibitions to ticketing; from festivals
          to photo shoots… we are your one stop solution.
        </p>
      </div>
      <PageLogo />
    </StyledAboutHeader>
  );
}

const StyledAboutHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    margin-top: 0rem;
    span {
      color: var(--pink);
    }
  }
  p {
    font-size: 1.1rem;
    max-width: 100%;
  }
`;
