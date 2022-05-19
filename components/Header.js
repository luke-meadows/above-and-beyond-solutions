import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState, useContext } from 'react';
import styled from 'styled-components';
import thumbnailLogo from '../public/assets/logos/thumbnail-white-logo.svg';
import logo from '../public/assets/logos/white-text-logo.svg';
import { Ctx } from '../lib/ctxProvider';
import Router from 'next/router';

export default function Header() {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [DropdownCoords, setDropdownCoords] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef();
  const servicesRef = useRef();

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
  const onGallery = router?.router?.asPath.includes('/gallery');

  // Sticky Menu
  function isSticky() {
    if (onAbout || onContact || onPartners || onGallery) return;
    console.log('hello');
    const stickPoint = 6;
    if (window.scrollY >= stickPoint) {
      setShouldStick(true);
    } else {
      setShouldStick(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  useEffect(() => {
    const rectHeight = headerRef.current.getBoundingClientRect().height;
    const dropdownLeft = servicesRef.current.getBoundingClientRect().x;
    setHeaderHeight(rectHeight);
    setDropdownCoords(dropdownLeft);
  }, [shouldStick]);

  return (
    <StyledHeader shouldStick={shouldStick} ref={headerRef}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link href="/">
          <ImageContainer shouldStick={shouldStick}>
            {shouldStick && (
              <Image
                priority
                alt="logo"
                title="logo"
                layout="responsive"
                src={logo}
              />
            )}
            {!shouldStick && (
              <Image
                priority
                alt="logo2"
                title="logo2"
                layout="responsive"
                src={thumbnailLogo}
              />
            )}
          </ImageContainer>
        </Link>
        <Nav>
          <ul>
            <ServicesContainer>
              <Link href="/services">
                <li ref={servicesRef} className="no-margin">
                  Services
                </li>
              </Link>
              <i
                className="icon-down-open-big"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              />
            </ServicesContainer>
            <Link href="/about-us">
              <li>About Us</li>
            </Link>
            <Link href="/partners">
              <li>Partners</li>
            </Link>
            <Link href="/contact-us">
              <li>Contact Us</li>
            </Link>
            <Link href="/gallery">
              <li>Gallery</li>
            </Link>
          </ul>
          {servicesDropdownOpen && (
            <ServicesDropdown
              left={DropdownCoords}
              onMouseLeave={() => setServicesDropdownOpen(false)}
              onClick={() => setServicesDropdownOpen(false)}
            >
              <ul>
                <Link href="/services/marketing">
                  <li>Marketing</li>
                </Link>
                <Link href="/services/exhibitions">
                  <li>Exhibitions</li>
                </Link>
                <Link href="/services/live-events">
                  <li>Live Events</li>
                </Link>
                <Link href="/services/brand-activations">
                  <li>Activations</li>
                </Link>
              </ul>
              <div className="overlay"></div>
            </ServicesDropdown>
          )}
        </Nav>
      </div>

      <div className="contact">
        <div className="left">
          <a
            aria-label="linked in"
            target="blank"
            rel="noreferrer"
            href="https://www.linkedin.com/company/aboveandbeyondsolutions/"
          >
            _
            <span>
              <i className="icon icon-linkedin" />
            </span>
          </a>
          <a
            aria-label="instagram"
            target="blank"
            rel="noreferrer"
            href="https://www.instagram.com/aboveandbeyond_solutions/"
          >
            _
            <i className="icon icon-instagram" />
          </a>
        </div>
        <div className="right">
          <span>
            <i className="icon-mail" />
          </span>
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
  left: 0;
  z-index: 3;
  width: 100vw;
  max-width: 100vw;
  padding: 0 var(--padding);
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
      cursor: pointer;
      &:hover {
        color: var(--pink);
      }
    }
    .left {
      margin-right: 1rem;
      display: flex;
      a {
        display: flex;
        align-items: center;
        color: transparent;
        i {
          color: white;
        }
      }
    }
  }
  .mobile-menu {
    display: var(--mobile-menu-icon-display);
    i {
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
    .no-margin {
      margin: 0;
    }
  }
`;

const ServicesContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0rem;

  i {
    font-size: 0.7rem;
    margin: 0.2rem 0 0 0.5rem;
    &:hover {
      color: var(--pink);
      cursor: pointer;
    }
  }
`;

const ServicesDropdown = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => `${props.left - 15}px`};
  z-index: 1;
  ul {
    z-index: 0;
    margin-top: 4rem;
    padding: 0.5rem;
    align-items: flex-start;
    flex-direction: column;
    background: black;
    li {
      text-align: left;
      margin: 0.5rem;
      padding: 0;
    }
  }
  .overlay {
    height: 5rem;
    width: 6.5rem;
    position: absolute;
    top: 2rem;
    z-index: -2;
  }
`;
