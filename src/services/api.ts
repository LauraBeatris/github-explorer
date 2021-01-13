import axios from "axios";

import { Issue, Repository, PullRequest } from "shared/githubAPI";

export const api = axios.create({
  baseURL: "https://api.github.com",
});

export async function getRepository(repositoryFullName: string) {
  const { data } = await api.get<Repository>(`repos/${repositoryFullName}`);

  return data;
}

export async function getIssues(repositoryFullName: string) {
  const { data } = await api.get<Issue[]>(`repos/${repositoryFullName}/issues`);

  return data.filter((item) => !item.pull_request);
}

export async function getPullRequests(repositoryFullName: string) {
  const { data } = await api.get<PullRequest[]>(`repos/${repositoryFullName}/pulls`);

  return data;
}
