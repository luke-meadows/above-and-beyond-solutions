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
        Brands we&apos;ve gone Above and Beyond for:
      </SectionBlurb>
      <Partners />
    </SectionContainer>
  );
}
