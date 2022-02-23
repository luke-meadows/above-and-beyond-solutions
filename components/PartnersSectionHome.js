import styled from 'styled-components';
import {
  SectionBlurb,
  SectionContainer,
  SectionHeading,
} from '../styles/GlobalStyles';
import Partners from './Partners';
export default function PartnersSectionHome() {
  return (
    <SectionContainer>
      <SectionHeading align="center">Our partners</SectionHeading>
      <SectionBlurb align="center">
        Brands who have experienced the creative impact of working with Above
        and Beyond:
      </SectionBlurb>
      <Partners />
    </SectionContainer>
  );
}
