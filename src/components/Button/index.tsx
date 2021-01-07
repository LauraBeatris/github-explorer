import React, { PropsWithChildren } from "react";
import { PulseLoader } from "react-spinners";

import { colors } from "styles/theme/colors";

import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

export function Button({
  children,
  isLoading,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  return (
    <StyledButton {...rest ?? {}}>
      {isLoading ? (
        <PulseLoader color={colors.white} size={10} />
      ) : children}
    </StyledButton>
  );
}
