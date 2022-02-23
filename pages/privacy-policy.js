import styled from 'styled-components';
import { SectionHeading } from '../styles/GlobalStyles';
import { ServicesHomeSummary } from '../styles/ServicesStyles';
export default function PrivacyPolicy() {
  return (
    <StyledPrivacy>
      <SectionHeading align="center">Privacy policy</SectionHeading>
      <Summary>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          quisquam tenetur adipisci necessitatibus eveniet esse aperiam iusto
          soluta, fuga fugit eligendi officiis similique nihil repudiandae qui
          temporibus assumenda dicta saepe magni quia id quos. Quis quaerat
          vitae, asperiores nesciunt recusandae quae maiores quia veritatis
          officia explicabo culpa rem quibusdam neque voluptatibus. Consequatur
          ex fuga, commodi inventore ullam quam, laboriosam animi modi
          molestiae, cupiditate voluptatum sunt libero tempora saepe alias ea
          iure numquam corporis temporibus ab accusantium nemo. Consectetur
          commodi aspernatur minima laudantium pariatur, inventore nobis
          possimus tempora natus ab ut, facilis laborum. Similique odit nulla
          quas nostrum laboriosam illo obcaecati.
        </p>
      </Summary>
    </StyledPrivacy>
  );
}

const StyledPrivacy = styled.div`
  padding-top: 6rem;
  min-height: 100vh;
`;

const Summary = styled.div`
  position: relative;
  color: black;
  text-align: center;
  z-index: 2;
  color: white;
  p {
    max-width: 120ch;
    font-size: var(--section-main-font-size);
    font-weight: 100;
    padding: 0rem var(--padding) 1rem var(--padding);
    margin: 0 auto;
    line-height: 1.5;
  }
`;
