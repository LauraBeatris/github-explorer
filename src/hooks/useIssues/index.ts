import { useQuery } from "react-query";

import { getIssues } from "services/api";

/**
 * Handle the issues query.
 */
export function useIssues(repositoryFullName: string) {
  const payload = useQuery(
    `${repositoryFullName}-issues`,
    () => getIssues(repositoryFullName),
  );

  return payload;
}
