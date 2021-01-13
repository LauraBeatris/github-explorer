import React from "react";

import { useSelectedRepository } from "contexts/SelectedRepositoryContext";
import { List, CenterLoadingContainer } from "styles/components";
import { usePullRequests } from "hooks/usePullRequests";
import { LinkBox } from "components/LinkBox";
import { PullRequest } from "shared/githubAPI";
import { Loading } from "components/Loading";

function shouldShowPullRequests(
  pullRequests: PullRequest[] | undefined,
  isLoading: boolean,
): pullRequests is PullRequest[] {
  return !isLoading && Boolean(pullRequests);
}

export function PullRequestsList() {
  const { selectedRepository } = useSelectedRepository();
  const { data, isLoading } = usePullRequests(
    selectedRepository?.full_name ?? "",
  );

  return (
    <>
      {shouldShowPullRequests(data, isLoading) ? (
        <List>
          {data.length > 0 ? (
            data.map(({ id, title, html_url }) => (
              <li key={id}>
                <LinkBox
                  as="a"
                  href={html_url}
                  title={title}
                  target="_blank"
                />
              </li>
            ))
          ) : <p>There are no pull requests open</p>}
        </List>
      ) : (
        <CenterLoadingContainer>
          <Loading />
        </CenterLoadingContainer>
      )}
    </>
  );
}
