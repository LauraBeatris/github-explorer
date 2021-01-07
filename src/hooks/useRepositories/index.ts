import { useMemo, useState, useCallback } from "react";
import { useLocalStorage } from "@rehooks/local-storage";

import { REPOSITORIES_STORAGE_KEY } from "constants/storage";
import { Repository } from "shared/types";
import { getRepository } from "services/api";

/**
 * Handle the list of repositories stored in the local storage.
 */
export function useRepositories() {
  const [
    repositories,
    setRepositories,
  ] = useLocalStorage<Repository[]>(REPOSITORIES_STORAGE_KEY, []);
  const [isLoading, setIsLoading] = useState(false);

  const addRepository = useCallback(async (repositoryName: string) => {
    const findRepositoryWithTheSameName = repositories.find(
      repository => repositoryName === repository.full_name,
    );

    if (findRepositoryWithTheSameName) {
      throw new Error("Esse repositório já foi adicionado");
    }

    try {
      setIsLoading(true);

      const repository = await getRepository(repositoryName);

      setRepositories([
        ...repositories,
        repository,
      ]);
    } catch (err) {
      throw new Error("Não foi possível encontrar o repositório");
    } finally {
      setIsLoading(false);
    }
  }, [repositories, setRepositories]);

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
