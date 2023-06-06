import { Page } from "@/components/Page";

export const AuthLayout: React.FC<{
  children: React.ReactNode;
  title?: string;
}> = ({ title, children }) => {
  return <Page title={title}>{children}</Page>;
};
