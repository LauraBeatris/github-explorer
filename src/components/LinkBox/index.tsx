import React, { PropsWithChildren } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import { LinkBoxProps } from "./types";

export function LinkBox({
  as: As = Link,
  title,
  children,
  description,
  ...rest
}: PropsWithChildren<LinkBoxProps>) {
  return (
    <As {...rest}>
      {children}

      <div>
        <strong>{title}</strong>

        <p>{description}</p>
      </div>

      <FiChevronRight size={18} />
    </As>
  );
}
