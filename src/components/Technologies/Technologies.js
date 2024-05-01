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
        <RiComputerLine size="3rem" inline-size="fit-content" />
        <ListContainer>
          <ListTitle>
            Front-end
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            <TechTypesList>
              <TechTypesListItem>React.js</TechTypesListItem>
              <TechTypesListItem>HTML/CSS</TechTypesListItem>
              <TechTypesListItem>Flask</TechTypesListItem>
              <TechTypesListItem>Tailwind</TechTypesListItem>
              <TechTypesListItem>Winforms</TechTypesListItem>
              <TechTypesListItem>DevExpress</TechTypesListItem>
            </TechTypesList>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <RiDatabaseLine size="3rem" inline-size="fit-content" />
        <ListContainer>
          <ListTitle>
            Back-end
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            <TechTypesList>
              <TechTypesListItem>Python</TechTypesListItem>
              <TechTypesListItem>C# .Net</TechTypesListItem>
              <TechTypesListItem>Go</TechTypesListItem>
              <TechTypesListItem>Java</TechTypesListItem>
            </TechTypesList>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <RiTerminalWindowLine size="3rem" inline-size="fit-content" />
        <ListContainer>
          <ListTitle>
            Tools/Platforms
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            <TechTypesList>
              <TechTypesListItem>Windows</TechTypesListItem>
              <TechTypesListItem>Linux</TechTypesListItem>
              <TechTypesListItem>Docker</TechTypesListItem>
              <TechTypesListItem>AWS ECS, EC2, S3, CloudWatch, Secrets Manager</TechTypesListItem>
              <TechTypesListItem>Git</TechTypesListItem>
              <TechTypesListItem>SVN</TechTypesListItem>
              <TechTypesListItem>Visual Studio/VS Code</TechTypesListItem>
            </TechTypesList>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
