import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useSelectedRepository } from "contexts/SelectedRepositoryContext";

import { RepositoryProps } from "./types";

export function Repository({ repository }: RepositoryProps) {
  const { setSelectedRepository } = useSelectedRepository();

  const handleClick = () => {
    setSelectedRepository(repository);
  };

  return (
    <li key={repository.full_name}>
      <Link
        onClick={handleClick}
        to={`/repositories?name=${repository.full_name}`}
      >
        <img
          src={repository.owner.avatar_url}
          alt={repository.owner.login}
          title={repository.owner.login}
          aria-label={repository.owner.login}
        />

        <div>
          <strong>{repository.full_name}</strong>

          <p>{repository.description}</p>
        </div>

        <FiChevronRight size={18} />
      </Link>
    </li>
  );
}
