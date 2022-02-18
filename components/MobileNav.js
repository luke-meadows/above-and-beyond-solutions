import Image from 'next/image';
import { useContext } from 'react';
import styled from 'styled-components';
import { Ctx } from '../lib/ctxProvider';
import thumbnailLogo from '../public/assets/logos/thumbnail-white-logo.svg';

export default function MobileNav() {
  const { mobileNavActive, setMobileNavActive } = useContext(Ctx);

  return (
    <StyledMobileNav className={mobileNavActive ? 'mobile-nav-active' : ''}>
      <MobileHeader>
        <ImageContainer>
          <Image priority layout="responsive" src={thumbnailLogo} alt="" />
        </ImageContainer>
        <div
          className="mobile-menu"
          onClick={() => setMobileNavActive(!mobileNavActive)}
        >
          <i className="icon-menu" />
        </div>
      </MobileHeader>
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
  position: fixed;
  background: black;
  color: white;
  height: 100vh;
  width: 100vw;
  z-index: 4;
  &.mobile-nav-active {
    opacity: 1;
    pointer-events: all;
  }
  ul {
    padding: 0 var(--padding);
  }
  .mobile-menu {
    display: var(--mobile-menu-icon-display);
    i {
      font-size: 1.8rem;
    }
  }
`;

const MobileHeader = styled.header`
  padding: 0 var(--padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-height);
`;
const ImageContainer = styled.div`
  width: 3rem;
  img {
    object-fit: cover;
    margin: 0;
    cursor: pointer;
  }
`;
