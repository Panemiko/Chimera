import Link from 'next/link'
import { AiOutlineRight as RightArrow } from 'react-icons/ai'

interface SelectionProps {
  name: string
  comment: string
  href: string
}

export function Selection(props: SelectionProps) {
  const { name, comment, href } = props

  return (
    <Link
      className='bg-primary3 w-[stretch] hover:bg-primary4 active:primary5 border-2 border-primary6 px-8 py-4 rounded-md flex items-center justify-between mb-6'
      href={href}
    >
      <div className='flex flex-col'>
        <span className='text-primary12 text-2xl font-medium'>{name}</span>
        <span className='text-primary11 font-light text-lg'>{comment}</span>
      </div>
      <div className='ml-4'>
        <RightArrow className='fill-primary11 h-4 w-4' />
      </div>
    </Link>
  )
}
