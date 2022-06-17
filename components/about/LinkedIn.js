import Image from 'next/image';
import LinkIcon from '../../public/assets/icons/open-external-link.svg';
import styled from 'styled-components';
export default function LinkedIn({ active }) {
  return (
    <StyledLinkedIn active={active}>
      <div className="linkedIn">
        <i className="icon-linkedin" />
      </div>
      <div className="link-icon">
        <Image src={LinkIcon} layout="responsive" />
      </div>
    </StyledLinkedIn>
  );
}

const StyledLinkedIn = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.1s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;
  i {
    color: white;
    font-size: 2rem;
  }
  .link-icon {
    position: relative;
    width: 0.6rem;
    margin-bottom: 1.8rem;
    margin-left: -0.5rem;
    svg {
      fill: white;
    }
  }

  @media only screen and (max-width: 800px) {
    opacity: 0;
  }
`;
