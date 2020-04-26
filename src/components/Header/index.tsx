import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import logo from '../../assets/logo.svg';

interface HeaderProps {
  backToDashboard?: boolean;
}

const Header: React.FC<HeaderProps> = ({ backToDashboard }) => (
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

export default Header;
