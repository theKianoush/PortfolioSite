import React from 'react';
import { DiApple, DiPython, DiDatabase } from 'react-icons/di';
import {  SiMicrosoftexcel, SiWebassembly } from 'react-icons/Si';
import {  BiNetworkChart } from 'react-icons/Bi';
import {  GiCircuitry } from 'react-icons/Gi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have learned many tools and acquired many skills throughout my school career.
      Here are a few topics I am well versed in.
    </SectionText>
    <List>

      <ListItem>
        <picture>
          <DiDatabase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Data Structures & Algorithms</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <GiCircuitry size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Logic Design & Circuits</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <SiWebassembly size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Assembly Language</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <BiNetworkChart size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Computer Protocols & Networks</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <SiMicrosoftexcel size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Microsoft Excel</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Data Science with Python</ListTitle>
        </ListContainer>
      </ListItem>

    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
