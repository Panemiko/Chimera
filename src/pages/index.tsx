import { Page } from '@/components/Page'
import { SelectorLayout } from '@/layouts/Selector'
import { trpc } from '@/utils/trpc'

export default function HomePage() {
  const rpgs = trpc.rpg.selectAll.useQuery()

  return (
    <Page>
      <SelectorLayout></SelectorLayout>
    </Page>
  )
}
