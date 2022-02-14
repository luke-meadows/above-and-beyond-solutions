import Link from 'next/link';
import styled from 'styled-components';
import { Nav } from './Header';
export default function Footer() {
  return (
    <StyledFooter>
      <div className="social-media">
        <i className="icon social icon-linkedin" />
        <i className="icon social icon-facebook" />
        <i className="icon social icon-instagram" />
      </div>
      <FooterNav>
        <ul>
          <Link href="/services">
            <li>Services</li>
          </Link>
          <li>About Us</li>
          <li>Partners</li>
          <li>Contact Us</li>
        </ul>
      </FooterNav>
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
    color: var(--pink);
    font-size: 1.5rem;

    .social {
      margin-right: 1rem;
    }
  }
  a {
    color: white;
  }
  button {
    border: 1px solid var(--pink);
    background: none;
    color: var(--white);
    text-align: center;
    margin-right: 0rem;
    i {
      color: var(--pink);
      font-size: 1rem;
      margin-right: 0rem;
    }
  }
  p {
    margin: 0 auto;
    width: fit-content;
    font-size: 0.8rem;
    font-weight: 300;
    color: var(--gray);
  }
`;

const FooterNav = styled(Nav)`
  flex-direction: row;
  color: white;
  ul {
    align-items: center;
    justify-content: center;
    li {
      margin: 0 2rem;
    }
  }
  width: 60rem;
  margin: 3rem auto;
  padding-left: 0;
`;
