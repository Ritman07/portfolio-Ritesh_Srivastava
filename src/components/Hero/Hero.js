import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome to <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      Computer science undergrad student inclination towards the field of Software Development.I’m looking
for an opportunity through which i can learn and contribute to a more established team and can resonate
with my work ethic and eagerness to learn and enhance professional skill.
      </SectionText>
      <Button onClick={ ()=> window.location = "https://google.com"}>learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;