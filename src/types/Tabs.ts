import { ReactNode } from "react";

export type Tab = {
  title: string;
  path: string;
};

export type TabsProperties = {
  children?: ReactNode;
};
