import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Link from "next/link";
import {NavLink} from "../Header/HeaderStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <title>theKianoush</title>
      <LeftSection>
        <SectionTitle main center>
          There is only one <br />
          Kianoush ️
        </SectionTitle>☝🔥☝🔥☝🔥☝🔥☝🔥☝🔥☝🔥☝🔥☝🔥☝🔥☝🔥☝🔥☝🔥☝🔥☝🔥☝🔥☝
        <SectionText>
        Motivated and driven to be the best he can be, not only in his profession, but at life. To be balanced in every aspect of life, and be as great as he can be, is a main goal in the life of Kianoush. With the last name Ranjbar, meaning "hard worker" he strives everyday to live up to the last name.
        </SectionText>
        <Link href="#about">
          <Button>Learn More</Button>
        </Link>

      </LeftSection>
    </Section>
  </>
);

export default Hero;