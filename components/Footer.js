import Link from 'next/link';
import styled from 'styled-components';
import { Nav } from './Header';
export default function Footer({ withNav }) {
  return (
    <StyledFooter>
      <div className="social-media">
        <a
          aria-label="linked in"
          target="blank"
          href="https://www.linkedin.com/company/aboveandbeyondsolutions/"
        >
          -
          <i className="icon social icon-linkedin" />
        </a>

        <a
          aria-label="instagram"
          target="blank"
          href="https://www.instagram.com/aboveandbeyond_solutions/"
        >
          -
          <i className="icon social icon-instagram" />
        </a>
      </div>
      {withNav && (
        <FooterNav>
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
        </FooterNav>
      )}
      <div className="lower">
        <p>Above and Beyond Solutions &copy; {new Date().getFullYear()} </p>
        <p className="line"> | </p>
        <Link href="/privacy-policy" className="privacy">
          Privacy Policy
        </Link>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  color: white;
  background: black;
  padding: 3rem 0;
  .social-media {
    margin-right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    .social {
      color: var(--pink);
      margin: 0.5rem;
      cursor: pointer;
      &:hover {
        color: var(--white);
      }
    }
  }
  .lower {
    display: flex;
    margin: 2rem auto 0 auto;
    width: fit-content;
    font-size: 0.8rem;
    font-weight: 300;
    color: var(--gray);
    .line {
      padding: 0 0.5rem;
    }
    a {
      color: var(--gray);
      text-decoration: underline;
    }
    @media only screen and (max-width: 325px) {
      font-size: 0.6rem;
      .privacy {
        font-size: 0.6rem;
      }
    }
  }
`;

const FooterNav = styled(Nav)`
  flex-direction: row;
  color: white;
  display: block;

  ul {
    align-items: center;
    justify-content: center;
    li {
      margin: 0 2rem;
      @media only screen and (max-width: 415px) {
        margin: 0 0.5rem;
      }
      @media only screen and (max-width: 325px) {
        margin: 0 0.3rem;
      }
    }
  }
  margin: 0 auto;
  width: var(--footer-nav-width);
  padding-left: 0;
  padding-right: 0;
`;
