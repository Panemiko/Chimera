import { Loading } from '@/components/Loading'

interface SelectorLayoutProps {
  children?: React.ReactNode
  loading?: boolean
}

export function SelectorLayout(props: SelectorLayoutProps) {
  const { children, loading } = props

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    )
  }

  return <div>{children}</div>
}
