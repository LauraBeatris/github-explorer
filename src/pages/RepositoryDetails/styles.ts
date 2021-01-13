import styled from "styled-components";
import media from "styled-media-query";

export const RepositoryDetailsContainer = styled.div`
  flex: 1;
  display: flex;
  margin-top: 80px;
  flex-direction: column;
`;

export const RepositoryDetailsHeader = styled.header`
  display: flex;
  align-items: center;

  ${media.lessThan("medium")`
    flex-direction: column;
  `}

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;

    ${media.lessThan("medium")`
      margin-bottom: 20px;
    `}
  }

  div {
    margin-left: 24px;
    flex: 1;

    ${media.lessThan("medium")`
      margin-left: 0px;
    `}

    strong,
    p {
      display: block;
    }

    strong {
      font-size: 36px;
      color: ${({ theme }) => theme.colors["gray-dark"]};
    }

    p {
      font-size: 18px;
      color: ${({ theme }) => theme.colors["gray-medium"]};
    }
  }
`;

export const RepositoryError = styled.h3`
  font-size: 24px;
  margin-right: auto;
  margin-top: 80px;
  color: ${({ theme }) => theme.colors["gray-dark"]};
`;

export const TabsContainer = styled.div`
  flex: 1;
  margin-top: 20px;
`;

export const RepositoryDetailsLoadingContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  margin-top: -80px;
  align-items: center;
  justify-content: center;
`;
