import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import { Ctx } from '../lib/ctxProvider';
import thumbnailLogo from '../public/assets/logos/thumbnail-white-logo.svg';
import Footer from '../components/Footer';
import MobileServicesDropdown from './MobileServicesDropdown';

export default function MobileNav() {
  const { mobileNavActive, setMobileNavActive } = useContext(Ctx);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <StyledMobileNav className={mobileNavActive ? 'mobile-nav-active' : ''}>
      <div className="top-section">
        <MobileHeader>
          <ImageContainer>
            <Image
              priority
              layout="responsive"
              src={thumbnailLogo}
              alt="logo"
              title="logo"
            />
          </ImageContainer>
          <div
            className={
              mobileNavActive
                ? '  mobile-menu mobile-nav-active'
                : 'mobile-menu'
            }
            onClick={() => setMobileNavActive(!mobileNavActive)}
          >
            <i className="icon-cancel-1" />
          </div>
        </MobileHeader>
        <ul>
          <Link href="/services">
            <div className="li-container">
              <li onClick={() => setMobileNavActive(false)}>Services</li>
              <span
                className={dropdownOpen ? 'rotate' : ''}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <i className="icon-down-open-big" />
              </span>
            </div>
          </Link>
          <MobileServicesDropdown
            mobileNavActive={mobileNavActive}
            setDropdownOpen={setDropdownOpen}
            dropdownOpen={dropdownOpen}
          />
          <Link href="/about-us">
            <li onClick={() => setMobileNavActive(false)}>About Us</li>
          </Link>
          <Link href="/partners">
            <li
              style={{ marginTop: '1px' }}
              onClick={() => setMobileNavActive(false)}
            >
              Partners
            </li>
          </Link>
          <Link href="/contact-us">
            <li
              style={{ marginTop: '1px' }}
              onClick={() => setMobileNavActive(false)}
            >
              Contact Us
            </li>
          </Link>
        </ul>
      </div>
      <Footer />
    </StyledMobileNav>
  );
}

const StyledMobileNav = styled.div`
  pointer-events: none;
  position: fixed;
  background: none;
  color: white;
  height: 100%;
  overflow-y: scroll;
  min-width: 100vw;
  z-index: 10;
  transition: all 0.5s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  * {
    opacity: 0;
  }
  &.mobile-nav-active {
    opacity: 1;
    pointer-events: all;
    * {
      opacity: 1;
    }
  }
  .top-section {
    ul {
      margin-top: 3rem;
      padding: 0 var(--padding);
      .li-container {
        display: flex;
        align-items: center;
      }
      li {
        font-size: 1.5rem;
        padding: 0.5rem 0;
        width: fit-content;
      }
      span {
        margin-left: 1rem;
      }
      i {
        font-size: 1rem;
        color: var(--pink);
      }
    }
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
  .rotate {
    transform: rotate(-180deg);
    * {
      color: white;
    }
    i {
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
