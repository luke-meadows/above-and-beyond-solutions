import Link from 'next/link';
import styled from 'styled-components';
export default function CallToAction() {
  return (
    <StyledCallToAction>
      <Link href="/contact-us">Contact Us</Link>
    </StyledCallToAction>
  );
}

const StyledCallToAction = styled.div`
  width: fit-content;
  margin: 0 auto;
  padding-bottom: 2rem;
  @media only screen and (max-width: 800px) {
    padding-bottom: 5rem;
  }
  a {
    color: var(--pink);
    font-size: 2rem;
    border-bottom: 2px solid var(--pink);
    line-height: 1;
  }
`;
