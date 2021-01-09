import React, {
  useMemo,
  useState,
  useEffect,
  useCallback,
  PropsWithChildren,
} from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import { getRepository } from "services/api";
import { Repository } from "shared/githubAPI";

import { SelectedRepositoryProvider } from ".";

export function SelectedRepositoryContainer({ children }: PropsWithChildren<unknown>) {
  const { search } = useLocation();
  const { name } = queryString.parse(search);

  const [selectedRepository, setSelectedRepository] = useState<Repository | null>(null);

  const { refetch, isLoading } = useQuery(
    ["repository", name],
    () => getRepository(name as string),
    {
      onSuccess: (repository) => {
        setSelectedRepository(repository);
      },
      enabled: false,
    },
  );

  const refetchRepository = useCallback(async () => {
    if (!name) {
      return;
    }

    refetch();
  }, [
    name,
    refetch,
  ]);

  useEffect(() => {
    const shouldRefetchRepository = Boolean(name) && !selectedRepository;

    if (!shouldRefetchRepository) {
      return;
    }

    refetchRepository();
  }, [
    name,
    refetchRepository,
    selectedRepository,
  ]);

  const payload = useMemo(() => ({
    isLoading,
    selectedRepository,
    setSelectedRepository,
  }), [
    isLoading,
    selectedRepository,
    setSelectedRepository,
  ]);

  return (
    <SelectedRepositoryProvider value={payload}>
      {children}
    </SelectedRepositoryProvider>
  );
}
