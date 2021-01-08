import { As } from "shared/utilties";

export interface LinkBoxProps {
  as?: As;
  title: string;
  description: string;
  [key: string]: unknown;
}
