import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState, useContext } from 'react';
import styled from 'styled-components';
import thumbnailLogo from '../public/assets/logos/thumbnail-white-logo.svg';
import logo from '../public/assets/logos/white-text-logo.svg';
import { Ctx } from '../lib/ctxProvider';
import Router from 'next/router';

export default function Header() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef();
  const {
    stickyNavCoords,
    shouldStick,
    setShouldStick,
    setMobileNavActive,
    mobileNavActive,
  } = useContext(Ctx);
  const router = Router;
  const onAbout = router?.router?.asPath === '/about-us';
  const onContact = router?.router?.asPath === '/contact-us';
  const onPartners = router?.router?.asPath === '/partners';

  function isSticky() {
    if (onAbout || onContact || onPartners) return;
    const stickPoint = stickyNavCoords - headerHeight;
    if (window.scrollY >= stickPoint) {
      setShouldStick(true);
    } else {
      setShouldStick(false);
    }
  }

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  useEffect(() => {
    const rectHeight = headerRef.current.getBoundingClientRect().height;
    setHeaderHeight(rectHeight);
  }, []);

  return (
    <StyledHeader shouldStick={shouldStick} ref={headerRef}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link href="/">
          <ImageContainer shouldStick={shouldStick}>
            {shouldStick && (
              <Image priority layout="responsive" src={logo} alt="" />
            )}
            {!shouldStick && (
              <Image priority layout="responsive" src={thumbnailLogo} alt="" />
            )}
          </ImageContainer>
        </Link>
        <Nav>
          <ul>
            <Link href="/services">
              <li>Services</li>
            </Link>
            <Link href="/about-us">
              <li>About Us</li>
            </Link>
            <Link href="/partners">
              <li>Partners</li>
            </Link>
            <Link href="/contact-us">
              <li>Contact Us</li>
            </Link>
          </ul>
        </Nav>
      </div>

      <div className="contact">
        <div className="left">
          <a
            target="blank"
            href="https://www.linkedin.com/company/aboveandbeyondsolutions/"
          >
            <i className="icon icon-linkedin" />
          </a>
          <a
            target="blank"
            href="https://www.instagram.com/aboveandbeyond_solutions/"
          >
            <i className="icon icon-instagram" />
          </a>
        </div>
        <div className="right">
          <span>
            <i className="icon-mail" />
          </span>{' '}
          hello@aboveandbeyondsolutions.co.uk
        </div>
      </div>
      {!mobileNavActive && (
        <div
          className="mobile-menu"
          onClick={() => setMobileNavActive(!mobileNavActive)}
        >
          <i className="icon-menu" />
        </div>
      )}
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: ${(props) => (props.shouldStick ? 'fixed' : 'absolute')};
  background: ${(props) => (props.shouldStick ? 'black' : 'none')};
  transition: all 0.1s ease-out;
  color: var(--white);
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left:0;
  z-index: 3;
  width: 100vw;
  max-width: 100vw;
  padding: 0 var(--padding);
  overflow: hidden;
  a {
    line-height: 0;
    color: white;
    cursor: pointer;
  }
  .contact {
    font-size: 0.8rem;
    color: rgb(157, 157, 157);
    color: white;
    line-height: 1.5;
    display: flex;
    align-items: center;
    font-weight: 300;
    display: var(--header-contact-display);
    .icon {
      font-size: 1.2rem;
      rgb(157, 157, 157);
      cursor: pointer;
      &:hover {
        color: var(--pink);
      }
    }
    .left {
      margin-right: 1rem;
      display: flex;
      a{
        display: flex; 
        align-items: center;
      }
    }
  }
  .mobile-menu{

    display: var(--mobile-menu-icon-display);
    i{
      font-size: 1.8rem;
    }

  }
`;

const ImageContainer = styled.div`
  width: ${(props) => (props.shouldStick ? '10rem' : '3rem')};
  img {
    object-fit: cover;
    margin: 0;
    cursor: pointer;
  }
`;

export const Nav = styled.nav`
  padding-left: 2.5rem;
  display: var(--header-nav-display);
  ul {
    display: flex;
    align-items: center;
    li {
      list-style: none;
      font-size: 0.9rem;
      margin: 0 1rem;
      font-weight: 100;
      display: flex;
      cursor: pointer;
      &:hover {
        color: var(--pink);
      }
    }
  }
`;
