import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { ButtonBack, LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Joe Thornton - Senior Software Engineer
      </SectionTitle>
      <SectionText>
        I'm Joe - a senior software engineer and team leader from the UK currently working in Japan on satellite ground systems.
      </SectionText>
      <ButtonBack href="#projects">
        Learn More
      </ButtonBack>
    </LeftSection>
  </Section>
);

export default Hero;