import { IssuesList } from "components/RepositoryDetailsLists/IssuesList";
import { PullRequestsList } from "components/RepositoryDetailsLists/PullRequestsList";

export const REPOSITORY_DETAILS_TABS = [
  {
    title: "Issues",
    component: IssuesList,
  },
  {
    title: "Pull Requests",
    component: PullRequestsList,
  },
];
