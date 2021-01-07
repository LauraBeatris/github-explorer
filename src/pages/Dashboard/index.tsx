import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Header } from "components/Header";
import { api } from "services/api";
import { useRepositories } from "hooks/useRepositories";
import { addRepositorySchema } from "schemas/addRepositorySchema";
import { Button } from "components/Button";

import {
  Repositories,
  Container,
  Title,
  Form,
  Error,
} from "./styles";
import { RepositoryFormValues } from "./types";

export function Dashboard() {
  const {
    errors,
    setError,
    register,
    formState,
    handleSubmit,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(addRepositorySchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [repositories, setRepositories] = useRepositories();

  const onSubmit: SubmitHandler<RepositoryFormValues> = async (
    data,
  ) => {
    const { repositoryName } = data;

    const findRepositoryWithTheSameName = repositories.find(
      repository => repositoryName === repository.full_name,
    );

    if (findRepositoryWithTheSameName) {
      setError("repositoryName", {
        type: "manual",
        message: "Esse repositório já foi adicionado",
      });

      return;
    }

    if (!findRepositoryWithTheSameName) {
      try {
        setIsLoading(true);

        const response = await api.get(`repos/${repositoryName}`);
        const repository = response.data;

        setRepositories([
          ...repositories,
          repository,
        ]);
      } catch (err) {
        setError("repositoryName", {
          type: "manual",
          message: "Não foi possível encontrar o repositório",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const { isDirty, isValid } = formState;

  const isButtonDisabled = isLoading || !isValid || !isDirty;
  const formHasError = !isValid && isDirty;

  const { repositoryName: repositoryNameError } = errors;

  return (
    <Container>
      <Header />

      <Title>Explore repositórios no GitHub</Title>

      <Form hasError={formHasError} onSubmit={handleSubmit(onSubmit)}>
        <input
          id="repositoryName"
          ref={register}
          type="text"
          name="repositoryName"
          aria-label="Repository Name"
          placeholder="Digite o nome do repositório"
        />

        <Button
          type="submit"
          isLoading={isLoading}
          disabled={isButtonDisabled}
        >
          Pesquisar
        </Button>
      </Form>

      {repositoryNameError && <Error>{repositoryNameError.message}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <li key={repository.full_name}>
            <Link to={`/repositories/${repository.full_name}`}>
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
                title={repository.owner.login}
                aria-label={repository.owner.login}
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

