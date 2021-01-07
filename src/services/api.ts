import axios from "axios";

import { Repository } from "shared/types";

export const api = axios.create({
  baseURL: "https://api.github.com",
});

export const getRepository = async (repositoryName: string) => {
  const { data } = await api.get<Repository>(`repos/${repositoryName}`);

  return data;
};
