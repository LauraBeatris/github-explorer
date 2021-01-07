import { useLocalStorage } from "@rehooks/local-storage";

import { REPOSITORIES_STORAGE_KEY } from "constants/storage";
import { Repository } from "shared/types";

/**
 * Handle the list of repositories stored in the local storage.
 */
export function useRepositories() {
  const payload = useLocalStorage<Repository[]>(REPOSITORIES_STORAGE_KEY, []);

  return payload;
}
