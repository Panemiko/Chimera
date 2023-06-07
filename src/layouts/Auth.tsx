import { Page } from "@/components/Page";

export const AuthLayout: React.FC<{
  children: React.ReactNode;
  title?: string;
}> = ({ title, children }) => {
  return (
    <Page title={title}>
      <div className="flex justify-center items-center h-screen">
        <div>{children}</div>
      </div>
    </Page>
  );
};
