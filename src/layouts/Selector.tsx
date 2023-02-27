import { useRouter } from 'next/router'
import { AiOutlineLeft as LeftArrow } from 'react-icons/ai'

import { Loading } from '@/components/Loading'

interface SelectorLayoutProps {
  children?: React.ReactNode
  loading?: boolean
  title: string
  subtitle?: string
}

/**
 * Layout for multi-option selection. Specially for different pages
 */
export function SelectorLayout(props: SelectorLayoutProps) {
  const { children, loading, title, subtitle } = props

  const { back, pathname } = useRouter()

  // Conditionally render the back button
  const rootPath = pathname === '/'

  // Display the loading screen conditionally
  if (loading) {
    return (
      <div className='h-screen flex items-center justify-center'>
        <Loading className='fill-primary9 h-16 w-16' />
      </div>
    )
  }

  return (
    <div className='px-5 py-10'>
      <div className='flex top-0 left-0 sticky justify-between shadow-xl shadow-neutral1 bg-neutral1 pt-4 mb-8'>
        <div className='flex flex-col'>
          {subtitle && (
            <h2 className='text-neutral11 uppercase text-2xl font-medium'>
              {subtitle}
            </h2>
          )}
          <h1 className='text-neutral12 break-all mr-2 text-5xl font-bold mb-5'>
            {title}
          </h1>
        </div>
        {!rootPath && (
          <div className='flex items-center'>
            <button
              onClick={back}
              className='rounded-full group bg-neutral3 p-2 hover:bg-neutral4 active:bg-neutral5 transition-colors'
              aria-label='Voltar'
            >
              <LeftArrow className='fill-neutral11 transition-colors group-hover:fill-neutral12 group-active:fill-neutral12 h-8 w-8' />
            </button>
          </div>
        )}
      </div>
      <div className='overflow-auto'>{children}</div>
    </div>
  )
}
