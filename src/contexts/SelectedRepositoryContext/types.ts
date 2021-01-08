import { Dispatch, SetStateAction } from "react";

import { Repository } from "shared/types";

export interface SelectedRepositoryContextPayload {
  isLoading: boolean;
  selectedRepository: Repository | null;
  setSelectedRepository: Dispatch<SetStateAction<SelectedRepositoryContextPayload["selectedRepository"]>>;
}
