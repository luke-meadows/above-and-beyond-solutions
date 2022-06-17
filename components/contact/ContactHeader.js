import styled from 'styled-components';
import PageLogo from '../global/PageLogo';
export default function ContactHeader() {
  return (
    <StyledContactHeader>
      <div>
        <h1>
          Contact <span>us</span>
        </h1>
        <p className="contact-text">
          If you&apos;d like to discuss an upcoming project or campaign you have
          in mind - send us a message, we&apos;d love to hear from you.
        </p>
      </div>
      <PageLogo />
    </StyledContactHeader>
  );
}

const StyledContactHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
  span {
    color: var(--pink);
  }
  p {
    font-size: 1.1rem;
    max-width: 85ch;
    padding-bottom: 1.75rem;
  }
  @media only screen and (max-width: 800px) {
    margin-bottom: 2rem;
  }
`;
