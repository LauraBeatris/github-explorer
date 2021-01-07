import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import logo from "assets/logo.svg";

import { Container } from "./styles";

interface HeaderProps {
  backToDashboard?: boolean;
}

export function Header({ backToDashboard }: HeaderProps) {
  return (
    <Container>
      <img
        src={logo}
        alt="GitHub Explorer"
        aria-label="GitHub Explorer"
        title="GitHub Explorer | Explore amazing repositories"
      />

      {backToDashboard && (
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      )}
    </Container>
  );
}

