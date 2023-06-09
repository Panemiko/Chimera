import { useHookstate } from "@hookstate/core";
import { useEffect } from "react";

import { Page } from "@/components/Page";
import { Character } from "@/types/Character";
import { getPlayerCharcters } from "@/utils/db";

export default function Home() {
  const characters = useHookstate<Character[]>([]);

  useEffect(() => {
    getPlayerCharcters().then(console.log).catch(console.error);
  }, []);

  return (
    <Page>
      {characters.get().map((char, index) => {
        return <span key={index}>{char.name}</span>;
      })}
    </Page>
  );
}
