import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { ButtonBack, LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Joe Thornton - Software Developer
      </SectionTitle>
      <SectionText>
        I'm Joe - a software developer from the UK currently working on laboratory management software for the nuclear medicine industry.
      </SectionText>
      <ButtonBack href="#projects">
        Learn More
      </ButtonBack>
    </LeftSection>
  </Section>
);

export default Hero;