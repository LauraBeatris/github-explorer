import React from "react";

import { useSelectedRepository } from "contexts/SelectedRepositoryContext";
import { LinkBox } from "components/LinkBox";

import { RepositoryProps } from "./types";

export function Repository({ repository }: RepositoryProps) {
  const { setSelectedRepository } = useSelectedRepository();

  const handleClick = () => {
    setSelectedRepository(repository);
  };

  const { full_name, description, owner } = repository;

  return (
    <LinkBox
      to={`/repositories?name=${full_name}`}
      title={full_name}
      description={description}
      onClick={handleClick}
    >
      <img
        src={owner.avatar_url}
        alt={owner.login}
        title={owner.login}
        aria-label={owner.login}
      />
    </LinkBox>
  );
}
