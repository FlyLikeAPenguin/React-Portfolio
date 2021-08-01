import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, ObjectivesList, ObjectivesListItem, Div3 } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { RiExternalLinkFill, RiCodeSSlashLine } from 'react-icons/ri';



const Projects = () => (
  <Section noPadding id="projects">
    <SectionDivider />
    <SectionTitle main>
      Projects
    </SectionTitle>
    <SectionText>
      Here's what I've done.
    </SectionText>
    <GridContainer>
      {projects.map(({ id, image, title, description, objectives, tags, source, visit }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>
              {title}
            </HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>
            {description}
          </CardInfo>
          <br />
          <CardInfo>
            Objectives:
          </CardInfo>
          <ObjectivesList>
            {objectives.map((objective, i) => (
              <ObjectivesListItem key={i}>
                {objective}
              </ObjectivesListItem>
            ))}
          </ObjectivesList>
          <div>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>
                  {tag}
                </Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>
              Visit&nbsp;
              <RiExternalLinkFill />
            </ExternalLinks>
            <ExternalLinks href={source}>
              Source&nbsp;
              <RiCodeSSlashLine size="2rem" />
            </ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section >
);

export default Projects;