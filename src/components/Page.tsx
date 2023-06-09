import { useHookstateEffect } from "@hookstate/core";
import clsx from "clsx";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

import { useAuth } from "@/hooks/useAuth";
import { authState } from "@/utils/state";
import { titleBuilder } from "@/utils/title";

const inter = Inter({ subsets: ["latin"] });

export const Page: React.FC<{
  title?: string;
  children?: React.ReactNode;
}> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{titleBuilder(title)}</title>
      </Head>
      <div
        className={clsx("bg-mauve1 h-screen text-whiteA12", inter.className)}
      >
        {children}
      </div>
    </>
  );
};
