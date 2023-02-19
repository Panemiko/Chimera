import Link from 'next/link'

interface SelectionProps {
  name: string
  comment: string
  href: string
}

export function Selection(props: SelectionProps) {
  const { name, comment, href } = props

  return (
    <Link
      className='bg-neutral3 w-[stretch] hover:bg-neutral4 active:neutral5 border-2 border-primary6 px-6 py-4'
      href={href}
    >
      <span className='text-neutral12 text-xl font-medium'>{name}</span>
      <span className='text-neutral11 text-lg'>{comment}</span>
    </Link>
  )
}
