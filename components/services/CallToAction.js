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

  a {
    color: var(--white);
    font-size: 1.8rem;
    line-height: 1;
    padding: 1rem;
    background: var(--pink);
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 2px;
    border-top-right-radius: 2px;
  }
`;
