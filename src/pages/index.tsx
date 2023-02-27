import { Page } from '@/components/Page'
import { Selection } from '@/components/Selector/Selection'
import { SelectorLayout } from '@/layouts/Selector'
import { trpc } from '@/utils/trpc'

/**
 * TODO: Add "no rpgs found"
 */
export default function HomePage() {
  const rpgsQuery = trpc.rpg.getAllRpgs.useQuery()

  return (
    <Page>
      <SelectorLayout title='Selecione o RPG' loading={rpgsQuery.isLoading}>
        <div>
          {!rpgsQuery.isLoading && !rpgsQuery.data && 'nent'}
          {rpgsQuery.data &&
            rpgsQuery.data.map((rpg, index) => (
              <Selection
                name={rpg.name}
                comment={`por ${rpg.author}`}
                href={`rpg/${rpg.id}`}
                key={index}
              />
            ))}
        </div>
      </SelectorLayout>
    </Page>
  )
}
