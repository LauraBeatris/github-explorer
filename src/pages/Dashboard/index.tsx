import React, {
  useRef,
  useState,
  FormEvent,
  useEffect,
} from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import api from "services/api";
import Header from "components/Header";

import {
  Repositories,
  Container,
  Title,
  Form,
  Error,
} from "./styles";

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export default function Dashboard() {
  const repositoryInputRef = useRef<HTMLInputElement>(null);
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      "@GithubExplorer:repositories",
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });

  const [inputError, setInputError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      "@GithubExplorer:repositories",
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    const newRepo = repositoryInputRef?.current?.value;

    if (!newRepo) return setInputError("Digite o nome do repositório");

    const findRepositoryWithTheSameName = repositories.find(
      repository => newRepo === repository.full_name,
    );
    if (findRepositoryWithTheSameName) return setInputError("Esse repositório já foi adicionado");

    try {
      setLoading(true);

      const response = await api.get(`repos/${newRepo}`);
      const repository = response.data;

      setRepositories(currentRepositories => [
        repository,
        ...currentRepositories,
      ]);
      setInputError("");
      if (repositoryInputRef.current) repositoryInputRef.current.value = "";

      return repository;
    } catch (err) {
      setInputError("Não foi possível encontrar o repositório");
      return err;
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Header />

      <Title>Explore repositórios no GitHub</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          type="text"
          name="repository"
          id="repository"
          placeholder="Digite o nome do repositório"
          ref={repositoryInputRef}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Carregando..." : ""}
        </button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <li key={repository.full_name}>
            <Link to={`/repositories/${repository.full_name}`}>
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

              <FiChevronRight size={18} />
            </Link>
          </li>
        ))}
      </Repositories>
    </Container>
  );
}

