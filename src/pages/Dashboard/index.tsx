import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useRepositories } from "hooks/useRepositories";
import { addRepositorySchema } from "schemas/addRepositorySchema";
import { Button } from "components/Button";
import { Layout } from "components/Layout";
import { Input } from "components/Input";
import { Repository } from "components/Repository";
import { List } from "styles/components";

import { Form, Title, AddRepositoryInputError } from "./styles";
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

  const { repositories, addRepository, isLoading } = useRepositories();

  const onSubmit: SubmitHandler<RepositoryFormValues> = async (
    data,
  ) => {
    const { repositoryName } = data;

    try {
      await addRepository(repositoryName);
    } catch (error) {
      setError("repositoryName", {
        type: "manual",
        message: error.message,
      });
    }
  };

  const { isDirty, isValid } = formState;
  const { repositoryName: repositoryNameError } = errors;

  const isButtonDisabled = isLoading || !isValid || !isDirty;
  const hasError = Boolean(repositoryNameError?.message) && !isValid && isDirty;

  return (
    <Layout>
      <Title>Explore repositórios no GitHub</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="repositoryName"
          ref={register}
          type="text"
          name="repositoryName"
          hasError={hasError}
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

      {repositoryNameError && (
        <AddRepositoryInputError>
          {repositoryNameError.message}
        </AddRepositoryInputError>
      )}

      <List>
        {repositories.map(repository => (
          <li key={repository.full_name}>
            <Repository repository={repository} />
          </li>
        ))}
      </List>
    </Layout>
  );
}

