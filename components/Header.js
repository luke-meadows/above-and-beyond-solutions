import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import thumbnailLogo from '../public/assets/logos/thumbnail-white-logo.svg';
import logo from '../public/assets/logos/white-text-logo.svg';
export default function Header() {
  return (
    <StyledHeader>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link href="/">
          <Image
            priority
            height="100px"
            width="90px"
            src={thumbnailLogo}
            alt=""
          />
        </Link>
        <nav>
          <ul>
            <Link href="/services">
              <li>
                Services
                {/* <div className="arrow">{'>'}</div> */}
              </li>
            </Link>
            <li>About Us</li>
            <li>Partners</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </div>

      <div className="contact">
        <div className="left">
          <i className="icon icon-linkedin"></i>
          <i className="icon icon-facebook"></i>
          <i className="icon icon-instagram"></i>
        </div>
        <div className="right">
          <span>
            <i className="icon-mobile"></i>
          </span>{' '}
          +447 949 442844
          <br />
          <span>
            <i className="icon-mail"></i>
          </span>{' '}
          info@aboveandbeyond.co.uk
        </div>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  color: var(--white);
  /* background: var(--black); */
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
  max-width: 100vw;
  padding: 0 5rem;
  a {
    line-height: 0;
    color: white
  }


  .contact {
    font-size: 0.8rem;
    color: rgb(157, 157, 157);
    color: white;
    line-height: 1.5;
    display: flex;
    align-items: center;
    font-weight: 300;

    .icon {
      font-size: 1.2rem;
      rgb(157, 157, 157);
      cursor: pointer;
      &:hover {
        color: var(--pink);
      }
    }
    .icon-mobile {
      /* margin-left: -0.2rem; */
    }
    .left {
      margin-right: 2rem;
      display: flex;
    }
  }
  nav {
  padding-left: 2.5rem;

    ul {
      display: flex;
      align-items: center;
      li {
        list-style: none;
        font-size: 0.8rem;
        margin: 0 1rem;
        font-weight: 300;
        display: flex;
        cursor: pointer;
      }
    }
    .arrow {
      transform: rotate(90deg);
      margin-left: 5px;
    }
  }
`;
