import { useQuery } from "react-query";

import { getPullRequests } from "services/api";

/**
 * Handle the pull requests query.
 */
export function usePullRequests(repositoryFullName: string) {
  const payload = useQuery(
    `${repositoryFullName}-pull-requests`,
    () => getPullRequests(repositoryFullName),
  );

  return payload;
}
