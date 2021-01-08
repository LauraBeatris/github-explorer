import styled, { css } from "styled-components";
import media from "styled-media-query";

import { InputProps } from "./types";

export const StyledInput = styled.input<InputProps>`
  flex: 1;
  height: 70px;
  padding: 0 24px;
  border: 0;
  border-radius: 5px 0 0 5px;
  border: 1px solid ${({ theme }) => theme.colors.background};

  ${({ hasError, theme }) => hasError
    && css`
      border: 2px solid ${theme.colors.error};
      border-right-width: 0;
    `};

  ${media.lessThan("medium")`
    flex: unset;
    border-right-width: 2px;
  `}
`;
