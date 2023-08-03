import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const Placeholder = () => {
  return (
    <Container>
      <Text>Project Coming soon...</Text>
      <StyledLink to="/#projects">Go back to Projects</StyledLink>
    </Container>
  );
};

export default Placeholder;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  height: 100vh;
  border-bottom: 2px solid var(--primary-color);
  background-color: var(--primary-color);
`;

const Text = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  @media only screen and (min-width: 600px) {
    font-size: 5rem;
  }
`;

const StyledLink = styled(HashLink)`
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    color: white;
  }
`;
