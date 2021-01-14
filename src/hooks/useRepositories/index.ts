import { useMemo, useState, useCallback } from "react";
import { useLocalStorage } from "@rehooks/local-storage";
import { useTranslation } from "react-i18next";

import { REPOSITORIES_STORAGE_KEY } from "constants/storage";
import { Repository } from "shared/githubAPI";
import { getRepository } from "services/api";

export function useRepositories() {
  const [
    repositories,
    setRepositories,
  ] = useLocalStorage<Repository[]>(REPOSITORIES_STORAGE_KEY, []);

  const [isLoading, setIsLoading] = useState(false);

  const [t] = useTranslation();

  const addRepository = useCallback(async (repositoryName: string) => {
    const findRepositoryWithTheSameName = repositories.find(
      repository => repositoryName === repository.full_name,
    );

    if (findRepositoryWithTheSameName) {
      throw new Error(t("errors.this_repository_has_already_been_added"));
    }

    try {
      setIsLoading(true);

      const repository = await getRepository(repositoryName);

      setRepositories([
        repository,
        ...repositories,
      ]);
    } catch (err) {
      throw new Error(t("errors.the_repository_could_not_be_found"));
    } finally {
      setIsLoading(false);
    }
  }, [
    t,
    repositories,
    setRepositories,
  ]);

  const payload = useMemo(() => ({
    isLoading,
    repositories,
    addRepository,
  }), [
    isLoading,
    repositories,
    addRepository,
  ]);

  return payload;
}
