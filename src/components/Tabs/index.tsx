import React from "react";

import {
  StyledTab,
  StyledTabs,
  StyledTabPanel,
  StyledTabList,
} from "./styles";
import { TabsProps } from "./types";

export function Tabs({ tabs }: TabsProps) {
  return (
    <StyledTabs selectedTabClassName="selected-tab" defaultFocus>
      <StyledTabList>
        {tabs.map(({ title }) => (
          <StyledTab key={title}>
            {title}
          </StyledTab>
        ))}
      </StyledTabList>

      {tabs.map(({ title, component: Component }) => (
        <StyledTabPanel key={title}>
          <Component />
        </StyledTabPanel>
      ))}
    </StyledTabs>
  );
}
