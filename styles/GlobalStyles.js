import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Nimbus Sans';
  src: url('/static/Nimbus-Sans-D-OT-Light-Extended_32750.ttf') format('woff2');
  font-weight: 100;

} 
 
@font-face {
  font-family: 'Nimbus Sans';
  src: url('/static/Nimbus-Sans-D-OT-Regular-Extended_32755.ttf') format('woff2');
  font-weight: 300;
}

@font-face {
  font-family: 'Nimbus Sans';
  src: url('/static/Nimbus-Sans-D-OT-Bold-Extended_32745.ttf') format('woff2');
  font-weight: 500;
} 


html {
  box-sizing: border-box;
  background: black;
  min-width: 100vw;
  min-height: 100vh;
  overscroll-behavior: none;
  --padding: 5rem;

  // --- COLORS ---
  --white: white;
  --pink: #e4526f;
  --black: #040404;
  --gray: #505050;
  --red: rgb(255, 81, 81);

  // --- FONTSIZES --
  --hero-header-text: 3rem;
  --hero-text: 1.6rem;
  --service-hero-header: 3rem;
  --service-hero-text: 1.4rem;
  --section-heading-text: 2.5rem;
  --section-main-font-size: 1.2rem;
  --header-height: 6rem;
  --header-nav-display: block;
  --header-contact-display: flex;
  --mobile-menu-icon-display: none;
  --section-heading-padding: 2rem 5rem;
  --service-section-tagline: 1.5rem;
  --partners-grid-gap: 2rem;
  --partners-grid-template-cols: repeat(8, 1fr);
  --service-card-grid-cols: repeat(4, 1fr);
  --service-card-header: 1.5rem;
  --footer-nav-width: 60rem;
  --microservice-grid-cols: repeat(3, 1fr);

  
  @media only screen and (max-width: 415px) {
    --hero-header-text: 2rem;
    --hero-text: 1.3rem;
    --service-hero-header: 2rem;
    --service-hero-text: 1rem;
    --section-heading-text: 1.8rem;
  --section-main-font-size: 1rem;
    --padding: 1rem;
    --header-height: 4rem;
    --header-nav-display: none;
    --header-contact-display: none;
    --mobile-menu-icon-display: initial;
    --service-section-tagline: 1rem;
    --section-heading-padding: 2rem 1rem;
    --partners-grid-gap: 1rem;
    --partners-grid-template-cols: repeat(6, 1fr);
    --service-card-grid-cols: repeat(1, 1fr);
    --service-card-header: 1.2rem;
    --footer-nav-width: 100%;
    --microservice-grid-cols: repeat(1, 1fr);
    }
    @media(max-width: 375px) and (max-height: 667px) {
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

h1,
h2,
h3 {
  line-height: 2;
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

export const SectionHeading = styled.h2`
  font-weight: 300;
  font-size: var(--section-heading-text);
  color: var(--pink);
  padding: 2rem var(--padding) 1rem var(--padding);
  text-align: ${(props) => props.align};
  text-align: center;
  @media only screen and (max-width: 415px) {
    padding: 1rem var(--padding) 1rem var(--padding);
    line-height: 1.5;
  }
`;

export const SectionBlurb = styled.h5`
  font-weight: 300;
  font-size: var(--service-section-tagline);
  padding: 0 var(--padding) 2rem var(--padding);
  text-align: ${(props) => props.align};
  text-align: center;
  @media only screen and (max-width: 415px) {
    padding: 0rem var(--padding) 1rem var(--padding);
  }
`;

export const MainText = styled.p`
  font-size: var(--section-main-font-size);
  font-weight: 100;
`;
