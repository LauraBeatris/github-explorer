
export interface RepositoryParams {
  repository: string;
}

export interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    avatar_url: string;
    login: string;
  };
}

export interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}
