import styled from 'styled-components';
import Logo from '../../public/assets/logos/about-us-logo.png';
import Image from 'next/image';
export default function PageLogo() {
  return (
    <StyledPageLogo>
      <Image src={Logo} layout="responsive" />
    </StyledPageLogo>
  );
}

const StyledPageLogo = styled.div`
  position: relative;
  min-width: 12rem;
  width: 12rem;
  margin-left: 6rem;
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;
