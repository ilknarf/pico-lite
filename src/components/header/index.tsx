import * as React from "react";

import { GithubLink, GithubText, HeaderDiv, HeaderText, Link } from "components/header/styles";

export const Header = () => (
  <HeaderDiv>
    <HeaderText>
      <Link to={"/"}>
        Picto-Lite
      </Link>
    </HeaderText>

    <GithubText>
      <GithubLink href={"https://github.com/ilknarf/picto-lite/"}>
        Github
      </GithubLink>
    </GithubText>
  </HeaderDiv>
);
