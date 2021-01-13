import styled from "styled-components";
import media from "styled-media-query";

import { List } from "styles/components";

export const Title = styled.h1`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.dark};
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  width: 100%;
  display: flex;

  ${media.lessThan("medium")`
    flex-direction: column;
    align-items: stretch;
  `}
`;

export const Repositories = styled.ul`
  margin-top: 80px;
  max-width: 700px;
  width: 100%;
  max-height: 400px;
  overflow: hidden scroll;

  &::-webkit-scrollbar {
    width: 18px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.dark};
    border-radius: 7.5px;
    border-left: 5px solid #f1f1f1;
    border-right: 5px solid #f1f1f1;
    width: 24px;
  }

  li {
    background: #fff;
    width: 100%;
    border-radius: 5px;
    transition: transform 0.2s;

    & + li {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(5px);
    }

    img {
      height: 64px;
      border-radius: 50%;
    }

    a {
      padding: 24px;
      text-decoration: none;
      display: flex;
      align-items: center;
    }

    div {
      margin-left: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: ${({ theme }) => theme.colors["gray-dark"]};
      }

      p {
        margin-top: 4px;
        font-size: 18px;
        color: ${({ theme }) => theme.colors.gray};
      }
    }

    svg {
      margin-left: auto;
      color: ${({ theme }) => theme.colors["gray-light"]};
    }
  }
`;

export const AddRepositoryInputError = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.error};
  margin-top: 8px;
`;

export const RepositoriesList = styled(List)`
  margin-top: 80px;
`;
