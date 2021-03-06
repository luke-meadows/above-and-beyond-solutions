import Link from 'next/link';
import { useContext } from 'react';
import { Ctx } from '../lib/ctxProvider';
import styled from 'styled-components';
export default function MobileServicesDropdown({
  setDropdownOpen,
  dropdownOpen,
}) {
  const { setMobileNavActive } = useContext(Ctx);
  return (
    <StyledDropdown className={dropdownOpen ? 'open' : ''}>
      <Link href="/services/marketing">
        <div
          className="link-container"
          onClick={() => {
            setMobileNavActive(false);
            setDropdownOpen(false);
          }}
        >
          Marketing
        </div>
      </Link>
      <Link href="/services/exhibitions">
        <div
          className="link-container"
          onClick={() => {
            setMobileNavActive(false);
            setDropdownOpen(false);
          }}
        >
          Exhibitions
        </div>
      </Link>

      <Link href="/services/live-events">
        <div
          className="link-container"
          onClick={() => {
            setMobileNavActive(false);
            setDropdownOpen(false);
          }}
        >
          Live Events
        </div>
      </Link>
    </StyledDropdown>
  );
}

const StyledDropdown = styled.div`
  max-height: 0;
  overflow: hidden;
  &.open {
    max-height: 40rem;
    margin-bottom: 1rem;
  }
  .link-container {
    /* margin: 10px 0; */
    width: 50%;
    padding: 1rem 0.5rem;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--white);
    border-bottom: 1px solid #e4526f9f;
    span {
      color: white;
      color: black;
      font-weight: 100;
    }
  }
`;
