import Link from 'next/link';
import styled from 'styled-components';
import { Nav } from './Header';
export default function Footer({ withNav }) {
  return (
    <StyledFooter>
      <div className="social-media">
        <a
          target="blank"
          href="https://www.instagram.com/aboveandbeyond_solutions/"
        >
          <i className="icon social icon-linkedin" />
        </a>
        {/* <a target="blank" href="">
          <i className="icon social icon-facebook" />
        </a> */}
        <a
          target="blank"
          href="https://www.instagram.com/aboveandbeyond_solutions/"
        >
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
      <p>Above and Beyond Solutions &copy; {new Date().getFullYear()}</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  color: white;
  background: black;
  padding: 3rem 0;
  .social-media {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    .social {
      color: var(--pink);
      margin-right: 1rem;
      cursor: pointer;
      &:hover {
        color: var(--white);
      }
    }
  }
  p {
    margin: 1.5rem auto 0 auto;
    width: fit-content;
    font-size: 0.8rem;
    font-weight: 300;
    color: var(--gray);
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
    }
  }
  margin: 0 auto;
  width: var(--footer-nav-width);
  padding-left: 0;
`;
