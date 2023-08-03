import styled from "styled-components";
import udemy from "../assets/udemy-certificate.png";
import concordia from "../assets/concordia-certificate.jpg";
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
          <Image src={concordia} alt="concordia-bootcamp" />
          <Image src={udemy} alt="udemy-diploma" />
        </ImgContainer>
      </motion.div>
    </Container>
  );
};

export default About;

const Container = styled.div`
  border-bottom: 2px solid var(--primary-color);
  margin: 2rem;
  padding-top: 3.5rem;
  @media only screen and (min-width: 960px) {
    height: 100vh;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  @media only screen and (min-width: 960px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const Image = styled.img`
  outline: 1.2rem solid var(--primary-color);
  margin: 2rem;
  @media only screen and (min-width: 960px) {
    outline: 1.5rem solid var(--primary-color);
    width: 50vh;
    height: 30vh;
    margin: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Skills = styled.div`
  font-family: var(--content-font-family);
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 2rem;
  color: #e65757;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 2rem 0rem 2rem 0rem;
  @media only screen and (min-width: 960px) {
    margin: 3rem 2rem 5rem 2rem;
    font-size: 1.5rem;
  }
`;

const Section = styled.h2`
  margin-bottom: 2rem;
  font-size: 3rem;
  font-weight: bold;
`;
