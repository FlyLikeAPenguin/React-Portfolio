import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

const data = [
  { number: 3, text: 'Open Source Projects' },
  { number: 4, text: 'Github Followers', },
  { number: 1, text: 'Github Star', }
];

const Accomplishments = () => (
  <Section>
    <SectionTitle>
      Personal Accomplishments
    </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxNum>{card.text}</BoxNum>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
