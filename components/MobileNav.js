import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import styled from 'styled-components';
import { Ctx } from '../lib/ctxProvider';
import thumbnailLogo from '../public/assets/logos/thumbnail-white-logo.svg';
import Router from 'next/router';

export default function MobileNav() {
  const { mobileNavActive, setMobileNavActive } = useContext(Ctx);

  return (
    <StyledMobileNav className={mobileNavActive ? 'mobile-nav-active' : ''}>
      <MobileHeader>
        <ImageContainer>
          <Image priority layout="responsive" src={thumbnailLogo} alt="" />
        </ImageContainer>
        <div
          className={
            mobileNavActive ? '  mobile-menu mobile-nav-active' : 'mobile-menu'
          }
          onClick={() => setMobileNavActive(!mobileNavActive)}
        >
          <i className="icon-cancel" />
        </div>
      </MobileHeader>
      <ul>
        <Link href="/services">
          <li onClick={() => setMobileNavActive(false)}>Services</li>
        </Link>
      </ul>
    </StyledMobileNav>
  );
}

const StyledMobileNav = styled.div`
  pointer-events: none;
  position: fixed;
  background: none;
  color: white;
  height: 100vh;
  width: 100vw;
  z-index: 4;
  transition: all 0.5s ease-out;
  * {
    opacity: 0;
  }
  &.mobile-nav-active {
    background: black;
    opacity: 1;
    pointer-events: all;
    * {
      opacity: 1;
    }
  }
  ul {
    padding: 0 var(--padding);
  }
  .mobile-menu {
    opacity: 0;
    i {
      font-size: 1.8rem;
    }
    &.mobile-nav-active {
      opacity: 1;
      transition: all 0s ease;
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
