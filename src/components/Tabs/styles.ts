import styled, { css } from "styled-components";
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from "react-tabs";
import { lighten } from "polished";

export const StyledTabs = styled(Tabs)`
  height: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
`;

export const StyledTabList = styled(TabList)`
  display: flex;
  border-radius: 10px;
`;

export const StyledTab = styled(Tab)`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors["gray-dark"]};
    position: relative;
    font-size: 18px;

    &.selected-tab {
      &:after {
        content: '';
        display: block;
        width: 100%;
        height: 4px;
        margin-top: 10px;
        border-radius: 2px;
        background: ${theme.colors.dark};
      }
    }

    &:hover {
      color: ${lighten(0.20, theme.colors.dark)};
    }

    &:not(:last-of-type) {
      margin-right: 15px;
    }
  `};
`;

export const StyledTabPanel = styled(TabPanel)`
  &.react-tabs__tab-panel--selected {
    flex: 1;
    padding-top: 20px;
  }
`;
