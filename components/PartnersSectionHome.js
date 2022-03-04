import {
  SectionBlurb,
  SectionContainer,
  SectionHeading2,
} from '../styles/GlobalStyles';
import Partners from './Partners';
export default function PartnersSectionHome() {
  return (
    <SectionContainer>
      <SectionHeading2 align="center">Our partners</SectionHeading2>
      <SectionBlurb align="center">
        Brands we&apos;ve gone Above and Beyond for:
      </SectionBlurb>
      <Partners />
    </SectionContainer>
  );
}
