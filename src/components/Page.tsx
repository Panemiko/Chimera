import { titleBuilder } from "@/utils/title";
import clsx from "clsx";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Loading } from "./Loading";

const inter = Inter({ subsets: ["latin"] });

export const Page: React.FC<{
  title?: string;
  children?: React.ReactNode;
  loading?: boolean;
}> = ({ children, title, loading = false }) => {
  const pageTitle = titleBuilder(loading ? undefined : title);
  const content = loading ? <Loading /> : children;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div
        className={clsx("bg-mauve1 h-screen text-whiteA12", inter.className)}
      >
        {content}
      </div>
    </>
  );
};
