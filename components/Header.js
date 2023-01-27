import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState, useContext } from 'react';
import styled from 'styled-components';
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
  const onServices = router?.router?.asPath.includes('/services');

  // Sticky Menu
  function isSticky() {
    if (onAbout || onContact || onPartners || onGallery) return;
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
      <div className="inner-header">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/">
            <ImageContainer shouldStick={shouldStick}>
              <Image
                priority
                alt="logo"
                title="logo"
                layout="responsive"
                src={logo}
              />
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
                shouldStick={shouldStick}
              >
                <ul>
                  <Link href="/services/live-events">
                    <li>Live Events</li>
                  </Link>
                  <Link href="/services/exhibitions">
                    <li>Exhibitions</li>
                  </Link>
                  <Link href="/services/marketing">
                    <li> Brand Marketing</li>
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
              href="https://www.instagram.com/aboveandbeyond_solutions/"
            >
              _
              <i className="icon icon-instagram" />
            </a>
            <a
              aria-label="facebook"
              target="blank"
              href="https://www.facebook.com/aboveandbeyondsol"
            >
              _
              <i className="icon icon-facebook" />
            </a>
            <a
              href="mailto:hello@aboveandbeyondsolutions.co.uk"
              className="right"
            >
              <span>
                <i className="icon icon-mail" />
              </span>
              {/* hello@aboveandbeyondsolutions.co.uk */}
            </a>
          </div>
        </div>
        {!mobileNavActive && (
          <div
            className="mobile-menu"
            onClick={() => setMobileNavActive(!mobileNavActive)}
          >
            <i className="icon-menu-1" />
          </div>
        )}
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: ${(props) => (props.shouldStick ? 'fixed' : 'absolute')};
  background: ${(props) => (props.shouldStick ? 'rgba(0,0,0,0.9)' : 'none')};

  transition: background 0.5s ease-in-out;
  color: var(--white);
  height: var(--header-height);
  top: 0;
  left: 0;
  z-index: 3;
  width: 100vw;
  max-width: 100vw;
  .inner-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    max-width: 1600px;
    margin: 0 auto;
    padding: 0rem 2rem;
  }
  .icon-mail {
    font-size: 1.2rem;
    margin-left: 0.5rem;
  }
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
  width: ${(props) => (props.shouldStick ? '10rem' : '10rem')};
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
  top: 2rem;
  left: ${(props) => `${props.left - 15}px`};
  z-index: 1;
  ul {
    z-index: 0;
    margin-top: 4rem;
    padding: 0.5rem;
    align-items: flex-start;
    flex-direction: column;
    background: ${(props) => (props.shouldStick ? 'rgba(0,0,0,0.9)' : 'none')};
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
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
