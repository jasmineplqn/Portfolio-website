import styled from "styled-components";
import { NavHashLink } from "react-router-hash-link";
import { Icon } from "react-icons-kit";
import { envelopeO } from "react-icons-kit/fa/envelopeO";
import { githubAlt } from "react-icons-kit/fa/githubAlt";
import { linkedinSquare } from "react-icons-kit/fa/linkedinSquare";

const Header = () => {
  return (
    <Wrapper>
      <NavBar>
        <NavTitle to="/#hero" smooth>
          <Logo>Jasmine Poliquin</Logo>
        </NavTitle>
        <div></div>
        <Box>
          <>
            <NavItem to="/#about" smooth>
              <Info>About</Info>
            </NavItem>
            <NavItem to="/#projects" smooth>
              <Info>Projects</Info>
            </NavItem>
            <NavItem to="/#contact" smooth>
              <Info>Contact</Info>
            </NavItem>
            <Contacts>
              <LinkStyle
                onClick={() => window.open("mailto:poliquin.jasmine@gmail.com")}
              >
                <Icon icon={envelopeO} />
              </LinkStyle>
              <LinkStyle
                href="https://github.com/jasmineplqn"
                target="blank_"
                rel="noopener noreferrer"
              >
                <Icon icon={githubAlt} />
              </LinkStyle>
              <LinkStyle
                href="http://linkedin.com/in/jasminepoliquin"
                target="blank_"
                rel="noopener noreferrer"
              >
                <Icon icon={linkedinSquare} />
              </LinkStyle>
            </Contacts>
          </>
        </Box>
      </NavBar>
    </Wrapper>
  );
};

export default Header;

const NavTitle = styled(NavHashLink)`
  text-decoration: none;
  &:hover {
    color: white;
  }
`;

const NavItem = styled(NavHashLink)`
  display: none;
  text-decoration: none;
  &:hover {
    color: white;
  }

  @media only screen and (min-width: 600px) {
    display: flex;
  }
`;

const LinkStyle = styled.a`
  margin: 0.5rem;
  &:hover {
    color: white;
  }
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  padding: 0.5rem 1rem 0 1rem;
`;

const Wrapper = styled.div`
  background-color: var(--primary-color);
  height: var(--header-height);
  font-family: var(--content-font-family);
  position: sticky;
  z-index: 10;
  top: 0;
`;

const Logo = styled.h1`
  font-family: var(--cursive-font-family);
  font-size: 1.5rem;
`;

const Box = styled.div`
  display: flex;
  color: white;
  font-size: 1rem;
`;
const Info = styled.p`
  margin-right: 0.5rem;
  padding-right: 0.5rem;
  border-right: 2px solid var(--content-color);
  &:hover {
    color: white;
  }
`;

const Contacts = styled.div``;
