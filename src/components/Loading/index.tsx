import React from "react";
import { PulseLoader } from "react-spinners";

import { colors } from "styles/theme/colors";

import { LoadingProps } from "./types";

export function Loading(props: LoadingProps) {
  return <PulseLoader color={colors.dark} size={15} {...props} />;
}
