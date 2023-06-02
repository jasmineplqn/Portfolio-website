import styled from "styled-components";
import udemy from "../assets/udemy-certificate.png";
import concordia from "../assets/placeholder.png";
import { motion } from "framer-motion";
import data from "../data/skills.json";

const About = () => {
  return (
    <Container id="about">
      <Section>About</Section>
      <Description>
        I am a web developer who is constantly learning and loves to take on
        challenges. I have worked using:
      </Description>
      <Skills>
        {data.skills.map((skill, index) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "linear", duration: index + 0.5 }}
              key={index}
            >
              {skill}
            </motion.div>
          );
        })}
      </Skills>
      <Description>Here are my credentials:</Description>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "linear", duration: 2 }}
      >
        <ImgContainer>
          <Image src={udemy} alt="udemy-diploma" />
          <Image src={concordia} alt="concordia-bootcamp" />
        </ImgContainer>
      </motion.div>
    </Container>
  );
};

export default About;

const Container = styled.div`
  height: 100vh;
  border-bottom: 2px solid var(--primary-color);
  margin: 2rem;
  padding-top: 3.5rem;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 3rem;
`;

const Image = styled.img`
  outline: 1.5rem solid var(--primary-color);
  width: 50vh;
  height: 30vh;
  margin: 1rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Skills = styled.div`
  font-family: var(--content-font-family);
  font-weight: bold;
  font-size: 1.5rem;
  color: #e65757;
  display: flex;
  justify-content: space-around;
  margin: 3rem 2rem 5rem 2rem;
`;

const Section = styled.h2`
  margin-bottom: 2rem;
  font-size: 3rem;
  font-weight: bold;
`;
