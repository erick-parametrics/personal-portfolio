import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row npadding>
    <LeftSection>
      <SectionTitle>Hello there - I'm Erick!</SectionTitle>

      <SectionText>
        I am a Systems Developer at Global Ag Risk Solutions. We are building
        projects that will make an impact to the world!
      </SectionText>

      <Button
        onClick={() =>
          (window.location = "https://github.com/erick-parametrics")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
