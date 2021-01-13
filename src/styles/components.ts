import styled, { css } from "styled-components";

export const List = styled.ul`
  max-width: 700px;
  width: 100%;
  max-height: 400px;
  overflow: hidden scroll;

  &::-webkit-scrollbar {
    width: 18px;
  }

  ${({ theme }) => css`
    &::-webkit-scrollbar-track {
      background: ${theme.colors["white-secondary"]};
    }

    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.dark};
      border-radius: 7.5px;
      border-left: 5px solid ${theme.colors["white-secondary"]};
      border-right: 5px solid ${theme.colors["white-secondary"]};
      width: 24px;
    }

    li {
      background: ${theme.colors.white};;
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
          color: ${theme.colors["gray-dark"]};
        }

        p {
          margin-top: 4px;
          font-size: 18px;
          color: ${theme.colors.gray};
        }
      }

      svg {
        margin-left: auto;
        color: ${theme.colors["gray-light"]};
      }
    }
  `}
`;

export const CenterLoadingContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
