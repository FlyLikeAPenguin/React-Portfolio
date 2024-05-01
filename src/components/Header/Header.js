import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { RiXingLine } from 'react-icons/ri';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
import PrefixedLink from '../../styles/GlobalComponents/PrefixedLink.js';

const Header = () => (
  <Container>
    <Div1>
      <PrefixedLink href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px" }}>
          <RiXingLine size="3rem" />
          <Span>
            Portfolio
          </Span>
        </a>
      </PrefixedLink>
    </Div1>
    <Div2>
      <li>
        <NavLink href="#projects">Projects</NavLink>
      </li>
      <li>
        <NavLink href="#tech">Technologies</NavLink>
      </li>
      <li>
        <NavLink href="#about">About Me</NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/FlyLikeAPenguin">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/joecthornton/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/itstokyojoe/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
