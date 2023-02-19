import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { Page } from '@/components/Page'
import { Selection } from '@/components/Selector/Selection'
import { SelectorLayout } from '@/layouts/Selector'
import { trpc } from '@/utils/trpc'

export default function RpgPage() {
  const { query, push } = useRouter()

  const rpgId = `${query.rpgId}`

  const rpgQuery = trpc.rpg.getById.useQuery({ rpgId })
  const charactersQuery = trpc.character.getByRpg.useQuery({ rpgId })

  useEffect(() => {
    if (rpgQuery.isLoading) return

    if (!rpgQuery.data) push('/')
  }, [rpgQuery.isLoading])

  return (
    <Page title={rpgQuery.data?.name || 'Loading'}>
      <SelectorLayout
        loading={charactersQuery.isLoading}
        title={rpgQuery.data?.name || 'Loading'}
      >
        <div>
          {charactersQuery.data?.map((character, index) => (
            <Selection
              name={character.name}
              href={`/rpg/${rpgId}/character/${character.id}`}
              comment={character.age.toString()}
              key={index}
            />
          ))}
        </div>
      </SelectorLayout>
    </Page>
  )
}
