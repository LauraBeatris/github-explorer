import React, { PropsWithChildren } from "react";

import { Header } from "components/Header";

import { Container } from "./styles";
import { LayoutProps } from "./types";

export function Layout({
  children,
  header = <Header />,
}: PropsWithChildren<LayoutProps>) {
  return (
    <Container>
      {header}

      {children}
    </Container>
  );
}
