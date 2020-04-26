import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { useRouteMatch, Link } from 'react-router-dom';

import { Container, RepositoryDetails, Issues } from './styles';
import Header from '../../components/Header';

const Repositories: React.FC = () => {
  const { params } = useRouteMatch();

  return (
    <Container>
      <Header backToDashboard />

      <RepositoryDetails>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/48022589?v=4"
            alt="Laura Beatris"
            aria-label="Laura Beatris"
            title="Laura Beatris"
          />

          <div>
            <strong>Amazon Next</strong>
            <p>descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryDetails>

      <Issues>
        <li>
          <Link to="dsfdsf">
            <div>
              <strong>asdsad</strong>

              <p>asdsad</p>
            </div>

            <FiChevronRight size={18} />
          </Link>
        </li>
      </Issues>
    </Container>
  );
};

export default Repositories;
