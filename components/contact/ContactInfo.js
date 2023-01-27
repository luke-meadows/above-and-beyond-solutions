import styled from 'styled-components';
export default function ContactInfo() {
  return (
    <StyledContactInfo>
      <a
        href="mailto:hello@aboveandbeyondsolutions.co.uk"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <i className="icon-mail" />
        <h2 className="contact-info">hello@aboveandbeyondsolutions.co.uk</h2>
      </a>
    </StyledContactInfo>
  );
}

const StyledContactInfo = styled.div`
  width: 50%;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--black);

  h2 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0;
    color: var(--white);
  }
  i {
    color: var(--pink);
    font-size: 2rem;
    margin-right: 1rem;
    padding: 0;
  }
  @media only screen and (max-width: 1200px) {
    h2 {
      font-size: 1rem;
    }
  }
  @media only screen and (max-width: 1000px) {
    h2 {
      font-size: 0.8rem;
    }
    i {
      font-size: 1.2rem;
    }
    padding-bottom: 1rem;
  }
  @media only screen and (max-width: 800px) {
    width: 100%;
    a {
      margin-top: 1rem;
    }
  }
`;
