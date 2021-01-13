import React from "react";

import { useSelectedRepository } from "contexts/SelectedRepositoryContext";
import { List, CenterLoadingContainer } from "styles/components";
import { useIssues } from "hooks/useIssues";
import { LinkBox } from "components/LinkBox";
import { Issue } from "shared/githubAPI";
import { Loading } from "components/Loading";

function shouldShowIssues(
  issues: Issue[] | undefined,
  isLoading: boolean,
): issues is Issue[] {
  return !isLoading && Boolean(issues);
}

export function IssuesList() {
  const { selectedRepository } = useSelectedRepository();
  const { data, isLoading } = useIssues(
    selectedRepository?.full_name ?? "",
  );

  return (
    <>
      {shouldShowIssues(data, isLoading) ? (
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
          ) : <p>There are no issues open</p>}
        </List>
      ) : (
        <CenterLoadingContainer>
          <Loading />
        </CenterLoadingContainer>
      )}
    </>
  );
}
