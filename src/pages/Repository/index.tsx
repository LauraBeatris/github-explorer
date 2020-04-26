import React, { useEffect, useState, useCallback } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { useRouteMatch } from 'react-router-dom';

import { Container, RepositoryDetails, Issues, Error } from './styles';
import Header from '../../components/Header';
import api from '../../services/api';

/*
  2 - Shimmer effect for loading
  4 - Show issues, forks and who started
*/

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    avatar_url: string;
    login: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repositories: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  const [activeInfo, setActiveInfo] = useState('issues');
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [repositoryError, setRepositoryError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const repositoryPromises = Promise.all([
      api.get<Repository>(`repos/${params.repository}`),
      api.get<Issue[]>(`repos/${params.repository}/issues`),
    ]);

    repositoryPromises
      .then(response => {
        const [repositoryResponse, issuesResponse] = response;

        setRepository(repositoryResponse.data);
        setIssues(issuesResponse.data);
        setRepositoryError('');
      })
      .catch(error => setRepositoryError(error.message))
      .finally(() => setLoading(false));
  }, [params.repository]);

  const handleActiveInfo = useCallback((info: string) => {
    setActiveInfo(info);
  }, []);

  return (
    <Container>
      <Header backToDashboard />

      {repository && (
        <RepositoryDetails>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
              aria-label={repository.owner.login}
              title={repository.owner.login}
            />

            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li
              className={`repository-info ${
                activeInfo === 'stars' ? 'active' : 'unactive'
              }`}
            >
              <button type="button" onClick={() => handleActiveInfo('stars')}>
                <strong>{repository.stargazers_count}</strong>
                <span>Stars</span>
              </button>
            </li>
            <li
              className={`repository-info ${
                activeInfo === 'forks' ? 'active' : 'unactive'
              }`}
            >
              <button type="button" onClick={() => handleActiveInfo('forks')}>
                <strong>{repository.forks_count}</strong>
                <span>Forks</span>
              </button>
            </li>
            <li
              className={`repository-info ${
                activeInfo === 'issues' ? 'active' : 'unactive'
              }`}
            >
              <button type="button" onClick={() => handleActiveInfo('issues')}>
                <strong>{repository.open_issues_count}</strong>
                <span>Issues abertas</span>
              </button>
            </li>
          </ul>
        </RepositoryDetails>
      )}

      {repositoryError && (
        <Error>
          Não foi possível encontrar o repositório, você escreveu o nome
          correto?
        </Error>
      )}

      <Issues>
        {issues.map(issue => (
          <li key={issue.id}>
            <a href={issue.html_url}>
              <div>
                <strong>{issue.title}</strong>

                <p>{issue.user.login}</p>
              </div>

              <FiChevronRight size={18} />
            </a>
          </li>
        ))}
      </Issues>

      {loading && <h3>Carregando informações do repositório...</h3>}
    </Container>
  );
};

export default Repositories;
