import React from 'react';
import { RiTerminalWindowLine, RiComputerLine, RiDatabaseLine } from 'react-icons/ri';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, TechTypesList, TechTypesListItem } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>
      Technologies
    </SectionTitle>
    <SectionText>
      Here's what I've used.
    </SectionText>
    <List>
      <ListItem>
        <RiComputerLine size="3rem" />
        <ListContainer>
          <ListTitle>
            Front-end
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            <TechTypesList>
              <TechTypesListItem>Winforms (3 Years Commerical)</TechTypesListItem>
              <TechTypesListItem>DevExpress (3 Years Commerical)</TechTypesListItem>
              <TechTypesListItem>React.js</TechTypesListItem>
              <TechTypesListItem>HTML/CSS</TechTypesListItem>
            </TechTypesList>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <RiDatabaseLine size="3rem" />
        <ListContainer>
          <ListTitle>
            Back-end
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            <TechTypesList>
              <TechTypesListItem>C# .Net (3 Years Commerical)</TechTypesListItem>
              <TechTypesListItem>.Net Core APIs (6 Months Commercial)</TechTypesListItem>
              <TechTypesListItem>Go</TechTypesListItem>
              <TechTypesListItem>Python</TechTypesListItem>
              <TechTypesListItem>Java</TechTypesListItem>
            </TechTypesList>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <RiTerminalWindowLine size="3rem" />
        <ListContainer>
          <ListTitle>
            Tools/Platforms
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            <TechTypesList>
              <TechTypesListItem>Windows</TechTypesListItem>
              <TechTypesListItem>Linux</TechTypesListItem>
              <TechTypesListItem>Git</TechTypesListItem>
              <TechTypesListItem>Subversion</TechTypesListItem>
              <TechTypesListItem>Visual Studio</TechTypesListItem>
              <TechTypesListItem>Sharepoint</TechTypesListItem>
            </TechTypesList>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
