import { Loading } from '@/components/Loading'

interface SelectorLayoutProps {
  children?: React.ReactNode
  loading?: boolean
  title: string
}

export function SelectorLayout(props: SelectorLayoutProps) {
  const { children, loading, title } = props

  if (loading) {
    return (
      <div className='h-screen flex items-center justify-center'>
        <Loading className='fill-primary9 h-16 w-16' />
      </div>
    )
  }

  return (
    <div className='px-5 py-10'>
      <h1 className='text-neutral12 text-center text-3xl font-bold mb-5'>
        {title}
      </h1>
      <hr className='border-primary6 mb-10' />
      {children}
    </div>
  )
}
