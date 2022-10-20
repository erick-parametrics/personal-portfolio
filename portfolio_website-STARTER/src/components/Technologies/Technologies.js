import React from "react";
import {
  DiFirebase,
  DiNodejs,
  DiNodejsSmall,
  DiReact,
  DiZend,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      These are following technologies that I have used in developing web
      applications.
    </SectionText>

    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            {/* Language: <br /> */}
            React.js
            <br />
            Next.js <br />
            jQuery <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiNodejsSmall size="3rem" />
        <ListContainer>
          <ListTitle>Back-End/Database</ListTitle>
          <ListParagraph>
            {/* Language: <br /> */}
            Node.js <br />
            Express.js <br />
            MongoDB <br />
            SQL (PostgreSQL, mySQL)
            <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Others</ListTitle>
          <ListParagraph>
            {/* Language: <br /> */}
            Git/Github <br />
            Docker <br />
            Software Development Life Cycle <br />
            Software Documentation & Testing <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
