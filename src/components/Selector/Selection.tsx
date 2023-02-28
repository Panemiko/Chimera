import clsx from 'clsx'
import Link from 'next/link'
import type { IconType } from 'react-icons'
import { AiOutlineRight as RightArrow } from 'react-icons/ai'

interface SelectionProps {
  name: string
  comment?: string
  href: string
  Icon?: IconType
  /**
   * The side the comment will be located
   * @default 'bottom'
   */
  commentSide?: 'bottom' | 'right'
  /**
   * Show or not the right arrow
   * @default true
   */
  showArrow?: boolean
}

export function Selection(props: SelectionProps) {
  const {
    name,
    comment,
    href,
    Icon,
    commentSide = 'bottom',
    showArrow = true,
  } = props

  return (
    <Link
      className='bg-primary3 w-stretch hover:bg-primary4 active:primary5 border-2 border-primary6 px-8 py-4 rounded-md flex items-center justify-between mb-6'
      href={href}
    >
      <div className='flex gap-3'>
        {Icon && <Icon className='h-8 w-8 fill-primary12 text-primary12' />}
        <div
          className={clsx([
            'flex',
            commentSide == 'bottom'
              ? 'flex-col'
              : 'gap-3 items-center break-word justify-between w-stretch',
          ])}
        >
          <span className='text-primary12 text-2xl font-medium'>{name}</span>
          {comment && <span className='text-primary11 text-lg'>{comment}</span>}
        </div>
      </div>
      {showArrow && (
        <div className='ml-4'>
          <RightArrow className='fill-primary11 h-4 w-4' />
        </div>
      )}
    </Link>
  )
}
