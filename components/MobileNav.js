import { useContext } from 'react';
import styled from 'styled-components';
import { Ctx } from '../lib/ctxProvider';
import Header from './Header';
export default function MobileNav() {
  const { mobileNavActive } = useContext(Ctx);

  return (
    <StyledMobileNav className={mobileNavActive ? 'mobile-nav-active' : ''}>
      <Header />
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
      </ul>
    </StyledMobileNav>
  );
}

const StyledMobileNav = styled.div`
  opacity: 0;
  pointer-events: none;
  padding-top: 5rem;
  position: fixed;
  background: black;
  color: white;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  &.mobile-nav-active {
    opacity: 1;
    pointer-events: all;
  }
  ul {
    padding: 0 var(--padding);
  }
`;
