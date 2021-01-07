import React, { PropsWithChildren } from "react";

import logo from "assets/logo.svg";

import { Container } from "./styles";

export function Header({ children }: PropsWithChildren<unknown>) {
  return (
    <Container>
      <img
        src={logo}
        alt="GitHub Explorer"
        aria-label="GitHub Explorer"
        title="GitHub Explorer | Explore amazing repositories"
      />

      {children}
    </Container>
  );
}

