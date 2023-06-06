import clsx from "clsx";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const Page: React.FC<{ title?: string; children?: React.ReactNode }> = ({
  children,
  title,
}) => {
  const pageTitle = title ? `${title} | Chimera` : "Chimera";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className={clsx("bg-mauve1", inter.className)}>{children}</div>
    </>
  );
};
