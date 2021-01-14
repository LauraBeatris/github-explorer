import { useQuery } from "react-query";

import { getIssues } from "services/api";

export function useIssues(repositoryFullName: string) {
  const payload = useQuery(
    `${repositoryFullName}-issues`,
    () => getIssues(repositoryFullName),
  );

  return payload;
}
