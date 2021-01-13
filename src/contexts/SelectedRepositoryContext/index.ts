import { createContext, useContext } from "react";

import { SelectedRepositoryContextPayload } from "./types";

const SelectedRepositoryContext = createContext({} as SelectedRepositoryContextPayload);

export const SelectedRepositoryProvider = SelectedRepositoryContext.Provider;

export function useSelectedRepository() {
  const context = useContext(SelectedRepositoryContext);

  if (!context) {
    throw new Error("useSelectedRepository should be within SelectedRepositoryProvider");
  }

  return context;
}
