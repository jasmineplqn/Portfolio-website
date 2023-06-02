import styled from "styled-components";
import { levelUp } from "react-icons-kit/fa/levelUp";
import { Icon } from "react-icons-kit";

const Contact = () => {
  return (
    <Container id="contact">
      <Section>Let's get in touch!</Section>
      <Info>
        Feel free to contact me here! <Icon icon={levelUp} />
      </Info>
      <FormBox>
        <Form>
          <Box>
            <Label htmlFor="name">Your full name:</Label>
            <Input type="text" id="name" placeholder="Full Name" />
          </Box>
          <Box>
            <Label htmlFor="email">Your email address:</Label>
            <Input type="email" id="email" placeholder="mail@email.com" />
          </Box>
          <Box>
            <Label htmlFor="msg">Your inquiry:</Label>
            <InputMsg
              type="text"
              id="msg"
              placeholder="Please note that this form is currently a placeholder and will not send!"
            />
          </Box>
          <ButtonBox>
            {" "}
            <Button disabled>Send</Button>
          </ButtonBox>
        </Form>
      </FormBox>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  height: 100vh;
  border-bottom: 2px solid var(--primary-color);
  margin: 2rem;
  padding-top: 3.5rem;
`;

const Section = styled.h2`
  margin-bottom: 2rem;
  font-size: 3rem;
  font-weight: bold;
`;

const Info = styled.div`
  display: flex;
  justify-content: end;
  position: relative;
  top: -5rem;
  color: var(--content-color);
  font-family: var(--content-font-family);
  font-size: 0.9rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50vh;
  width: 50%;
  margin-top: 2rem;
`;

const FormBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const Input = styled.input`
  height: 2rem;
  width: 100%;
  background-color: #efebf5;
  border: none;
`;
const InputMsg = styled.input`
  background-color: #efebf5;
  border: none;
  height: 5rem;
`;

const Button = styled.button`
  background-color: var(--primary-color);
  width: 20%;
  padding: 1rem;
  border: none;
  border-radius: 20px;
  margin-top: 1rem;
  font-size: 1.5rem;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;
const Label = styled.label`
  margin: 0.7rem 0 0.9rem 0;
  font-size: 2rem;
`;
