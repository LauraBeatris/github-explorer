import styled, { css } from "styled-components";
import { shade } from "polished";

export const StyledButton = styled.button`
  ${({ theme }) => css`
    width: 210px;
    height: 70px;
    background: ${theme.colors.green};
    border: 0;
    color: ${theme.colors.white};
    font-weight: bold;
    transition: background-color 0.2s;

    @media screen and (max-width: 600px) {
      width: 100%;
    }

    &:hover {
      background: ${shade(0.2, theme.colors.green)};
    }
  `}
`;
