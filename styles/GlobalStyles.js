import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`




html {
  box-sizing: border-box;
  background: black;
  overscroll-behavior: none;
  --padding: 5rem;

  // --- COLORS ---
  --white: #eaeaea;
  --pink: #E04B6A;
  --pink2:  #e04b6997;
;
  --black: #040404;
  --gray: #505050;
  --red: rgb(255, 81, 81);
  
  // LARGE MONITOR
  --hero-text: 1.6rem;
  --hero-image-width: 1200px;
  --service-hero-header: 4rem;
  --service-hero-text: 1.4rem;
  --section-heading-text: 3rem;
  --section-heading-margin-bottom: 1rem;
  --section-main-font-size: 1.2rem;
  --service-home-container-padding: 3rem 0 1rem 0;
  --service-home-summary-padding: 2rem var(--padding) 3rem var(--padding);
  --header-height: 6rem;
  --header-nav-display: block;
  --header-contact-display: flex;
  --mobile-menu-icon-display: none;
  --section-container-padding: 3rem 5rem 0rem 5rem;
  --section-heading-padding: 2rem 5rem;
  --section-heading-line-height: 2;
  --service-section-tagline: 1.5rem;
  --partners-grid-gap: 3rem;
  --partners-grid-template-cols: repeat(11, 1fr);
  --service-card-grid-cols: repeat(4, 1fr);
  --service-card-header: 1.5rem;
  --footer-nav-width: 60rem;
  --microservice-grid-cols: repeat(3, 1fr);
  --microservice-card-padding: 6rem 0;
  --microservice-card-row-gap: 6rem ;
  --microservice-card-col-gap: 12rem ;
  --team-img-grid-gap: 2rem;
  --team-img-col-gap: 2rem;
  @media only screen and (max-width: 1600px) {
    --microservice-card-padding: 4rem 0;
  --microservice-card-row-gap: 4rem ;
  --microservice-card-col-gap: 4rem ;
  }

// LAPTOP
  @media only screen and (max-width: 1440px) {
  --hero-text: 1.4rem;
  --hero-image-width: 1000px;
  --service-hero-header: 3.5rem;
  --service-hero-text: 1.5rem;
  --section-heading-text: 2.5rem;
  --section-main-font-size: 1.2rem;
  --service-section-tagline: 1.3rem;
  --section-container-padding: 2rem 5rem 0rem 5rem;
  --service-home-container-padding: 2rem 0 1rem 0;
  --partners-grid-gap: 2rem;
  /* --team-img-grid-gap: 6rem;
  --team-img-col-gap: 4rem; */
  }
  //IPAD
  @media only screen and (max-width: 1100px) {
    --hero-image-width: 800px;
    --service-card-grid-cols: repeat(2, 1fr);
    --service-home-container-padding: 2rem 0 1rem 0;
  --section-container-padding: 3rem 5rem 0rem 5rem;

    --padding: 2rem;
    --service-hero-header: 4rem;
    --service-hero-text: 1.2rem;
    --microservice-grid-cols: repeat(2, 1fr);
    --team-img-grid-gap: 4rem;
  --team-img-col-gap: 4rem;
  }
  // LARGE PHONE 
  
  @media only screen and (max-width: 900px) {
    --hero-text: 1rem;
    --hero-image-width: 500px;
    --service-hero-header: 2.5rem;
    --service-hero-text: 1.2rem;
    --section-heading-text: 1.8rem;
    --section-main-font-size: 1rem;
    --service-home-summary-padding: 2rem var(--padding) 1rem var(--padding);
    --padding: 1rem;
    --service-section-tagline: 1rem;
    --section-heading-padding: 2rem 1rem;
    --section-heading-line-height: 1.5;
    --partners-grid-gap: 1rem;
    --partners-grid-template-cols: repeat(5, 1fr);
    --service-card-grid-cols: repeat(1, 1fr);
    --service-card-header: 1.2rem;
    --footer-nav-width: 100%;
    --microservice-grid-cols: repeat(1, 1fr);
    --section-container-padding: 2rem 5rem 0rem 5rem;
    --team-img-grid-gap: 6rem;
      --team-img-col-gap: 6rem;

  }

  @media only screen and (max-width: 1200px) {
    --header-height: 4rem;
    --header-nav-display: none;
    --header-contact-display: none;
    --mobile-menu-icon-display: initial;
  }

  @media only screen and (max-width: 700px) {
    --hero-image-width: 90vw;
    --hero-text: 1rem;
    --service-hero-header: 1.8rem;
    --service-hero-text: 1rem;
    --padding: 1rem;
    --section-heading-margin-bottom: 1rem;
    --section-container-padding: 1rem 1rem 0rem 1rem;
  --service-home-container-padding: 1rem 0 1rem 0;
  --microservice-card-row-gap: 3rem ;
  --microservice-card-padding: 3rem 0;

  }
  
  
    @media(max-width: 375px) and (max-height: 660px) {
      --service-hero-header: 1.8rem;
      --service-hero-text: 0.8rem;
    }
    @media(max-width: 375px) and (max-height: 568px) {
      --service-hero-header: 1.5rem;
    } 
}
body {
  font-family: 'Nimbus Sans', sans-serif;
  margin: 0;
  padding: 0;
  overscroll-behavior: none;
  box-sizing: inherit;
}
*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}


li {
  list-style: none;
}
button {
  text-transform: uppercase;
  font-family: 'Nimbus Sans', sans-serif;
  background: var(--pink);
  padding: 0.5rem 1rem;
  color: black;
  display: block;
  outline: none;
  border: none;
  min-width: 6rem;
  cursor: pointer;
  font-weight: 300;

}

a {
  text-decoration: none;
  margin: 0;
  padding: 0;
  color: black;
}

`;

export const SectionHeading = styled.h3`
  font-weight: 500;
  color: var(--pink);
  text-align: ${(props) => props.align};
  line-height: var(--section-heading-line-height);
  z-index: 2;
  @media only screen and (max-width: 800px) {
    font-size: 2rem;
  }
`;
export const SectionHeading2 = styled.h2`
  font-weight: 500;
  font-size: var(--section-heading-text);
  color: var(--pink);
  text-align: ${(props) => props.align};
  margin-bottom: 0;
  line-height: var(--section-heading-line-height);
`;

export const SectionBlurb = styled.h2`
  font-weight: 300;
  font-size: var(--service-section-tagline);
  text-align: ${(props) => props.align};
  margin: 0 auto;
`;
export const SectionBlurb2 = styled.h3`
  font-weight: 300;
  font-size: var(--service-section-tagline);
  text-align: ${(props) => props.align};
  margin: 0 auto;
`;

export const MainText = styled.p`
  font-size: var(--section-main-font-size);
  font-weight: 100;
`;

export const SectionContainer = styled.section`
  max-width: 1600px;
  width: 1600px;
  margin: 0 auto;
  padding: 2rem 2rem 2rem 2rem;
  background: var(--white);
  @media only screen and (max-width: 800px) {
    padding: 0rem 1.5rem;
  }
`;
export const Container = styled.section`
  max-width: 1600px;
  width: 1600px;
  margin: 0 auto;
  padding: 10rem 2rem 4rem 2rem;
  background: var(--white);
  @media only screen and (max-width: 1700px) {
    padding: 10rem 2rem 4rem 2rem;
    width: 100%;
  }
`;
