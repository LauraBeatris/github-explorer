/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Tab {
  title: string;
  component: React.FC<any>;
}

export interface TabsProps {
  tabs: Tab[];
}
