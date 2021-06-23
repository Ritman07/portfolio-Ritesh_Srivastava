import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
const projectdemo =[{title:"Project 1",
Description: "this is a really really long discription abbout this prooject"},{title:"Project 2",
Description: "this is a really really long discription abbout this prooject"},{title:"Project 3",
Description: "this is a really really long discription abbout this prooject"},{title:"Project 4",
Description: "this is a really really long discription abbout this prooject"}]

const Projects = () => (
  <Section id="Project">
<SectionDivider />
<SectionTitle main>Projects</SectionTitle>
<GridContainer>
  {projects.map((project)=>(
    <div>
      <BlogCard key={project.id}>
        <Img src={project.image}/>
        <TitleContent>
          <h3>{project.title}</h3>
          <Hr />
          
        </TitleContent>
        <CardInfo>{project.description}</CardInfo>
        <br/>
        <div>
          <TitleContent>Stack</TitleContent>
          <TagList>{project.tags.map((tag,i)=>(
          <Tag key={i}>{tag}</Tag>


          ))}</TagList>
        </div>

      </BlogCard>
      
    </div>
  ))}
  </GridContainer>
  </Section>
);

export default Projects;