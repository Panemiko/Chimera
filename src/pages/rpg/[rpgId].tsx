import { useRouter } from 'next/router'

import { Page } from '@/components/Page'
import { Selection } from '@/components/Selector/Selection'
import { SelectorLayout } from '@/layouts/Selector'
import { trpc } from '@/utils/trpc'

/**
 * TODO: Add no character found
 */
export default function RpgPage() {
  const { query, push, basePath } = useRouter()

  const rpgId = `${query.rpgId}`

  const rpgQuery = trpc.rpg.getRpgById.useQuery({ rpgId })
  const charactersQuery = trpc.character.getCharactersByRpg.useQuery({ rpgId })

  // Don't render the page if the rpg doesn't exist
  if (!rpgQuery.isLoading && !rpgQuery.data) {
    push('/')
    return
  }

  return (
    <Page title={rpgQuery.data?.name || 'Loading'}>
      <SelectorLayout
        loading={charactersQuery.isLoading || rpgQuery.isLoading}
        title={rpgQuery.data?.name}
        subtitle='Rpg'
      >
        <div>
          {charactersQuery.data?.map((character, index) => (
            <Selection
              name={character.name}
              href={`${basePath}/character/${character.id}`}
              comment={character.age.toString()}
              commentSide='right'
              key={index}
            />
          ))}
        </div>
      </SelectorLayout>
    </Page>
  )
}
