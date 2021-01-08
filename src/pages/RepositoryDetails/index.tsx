import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";

import { Layout } from "components/Layout";
import { Header } from "components/Header";
import { Repository } from "shared/types";
import { useSelectedRepository } from "contexts/SelectedRepositoryContext";
import { colors } from "styles/theme/colors";

import {
  RepositoryDetailsHeader,
  RepositoryDetailsContainer,
  RepositoryDetailsLoadingContainer,
} from "./styles";

function RepositoryDetailsLayoutHeader() {
  return (
    <Header>
      <Link to="/">
        <FiChevronLeft size={16} />
        Voltar
      </Link>
    </Header>
  );
}

function shouldShowRepositoryDetailsHeader(
  selectedRepository: Repository | null,
  isLoading: boolean,
): selectedRepository is Repository {
  return !isLoading && Boolean(selectedRepository);
}

export function RepositoryDetails() {
  const { selectedRepository, isLoading } = useSelectedRepository();

  return (
    <Layout header={<RepositoryDetailsLayoutHeader />}>
      <RepositoryDetailsContainer>
        {shouldShowRepositoryDetailsHeader(selectedRepository, isLoading) ? (
          <RepositoryDetailsHeader>
            <img
              src={selectedRepository.owner?.avatar_url}
              alt={selectedRepository.owner?.login}
              aria-label={selectedRepository.owner?.login}
              title={selectedRepository.owner?.login}
            />

            <div>
              <strong>{selectedRepository.full_name}</strong>
              <p>{selectedRepository.description}</p>
            </div>
          </RepositoryDetailsHeader>
        ) : (
          <RepositoryDetailsLoadingContainer>
            <PulseLoader color={colors.dark} size={15} />
          </RepositoryDetailsLoadingContainer>
        )}
      </RepositoryDetailsContainer>
    </Layout>
  );
}

