import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { text: 'Getting my CompTIA Network+ and Security+ Certifications'},
  { text: 'Learning Ethical Hacking, and Linux commands more in depth', },
  { text: 'Learning more complex algorithms and implementing them in C++', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Currently Working On</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>

          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
