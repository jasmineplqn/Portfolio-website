import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { externalLink } from "react-icons-kit/fa/externalLink";
import { githubAlt } from "react-icons-kit/fa/githubAlt";
import { Link } from "react-router-dom";
import data from "../data/projects";

const Projects = () => {
  return (
    <Container id="projects">
      <Section>Projects</Section>
      <Grid>
        {data.projects.map((project, index) => {
          return (
            <GridItem key={index}>
              <Image src={project.src} alt={project.name} />
              <ProjectContent>
                <Title>{project.name}</Title>
                <Description>{project.description}</Description>
                <LinkBox>
                  {project.link.startsWith("/") ? (
                    <StyledLink to={project.link}>
                      {" "}
                      <Icon icon={externalLink} size={30} />
                    </StyledLink>
                  ) : (
                    <AnchorLink
                      href={project.link}
                      target="blank_"
                      rel="noopener noreferrer"
                    >
                      <Icon icon={externalLink} size={30} />
                    </AnchorLink>
                  )}
                  <AnchorLink
                    href={project.github}
                    target="blank_"
                    rel="noopener noreferrer"
                  >
                    <Icon icon={githubAlt} size={30} />
                  </AnchorLink>
                </LinkBox>
              </ProjectContent>
            </GridItem>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  height: 100vh;
  border-bottom: 2px solid var(--primary-color);
  padding: 2rem;
  padding-top: 3.5rem;
  background-color: var(--primary-color);
`;

const Section = styled.h2`
  margin-bottom: 1rem;
  font-size: 3rem;
  font-weight: bold;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  height: 80vh;
  gap: 15px;
`;

const Image = styled.img`
  position: absolute;
  object-fit: cover;
  z-index: 2;
  width: 100%;
  height: 100%;
  opacity: 100%;
  border-radius: 15px;
  pointer-events: none;
`;

const ProjectContent = styled.div`
  display: flex;
  position: relative;
  z-index: 0;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const GridItem = styled.div`
  display: flex;
  position: relative;
  z-index: 0;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 1rem;
  &:hover ${Image} {
    opacity: 15%;
    transition: all 0.3s ease-in-out;
  }
  &:hover ${ProjectContent} {
    opacity: 100%;
  }
`;

const Title = styled.h2`
  margin: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Description = styled.p`
  margin: 0.5rem;
  font-weight: bold;
`;

const AnchorLink = styled.a`
  margin-right: 1rem;

  &:hover {
    color: var(--primary-color);
  }
`;
const StyledLink = styled(Link)`
  margin-right: 1rem;
  &:hover {
    color: var(--primary-color);
  }
`;

const LinkBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
`;
