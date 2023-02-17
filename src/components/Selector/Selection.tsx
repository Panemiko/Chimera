import Link from 'next/link'

interface SelectionProps {
  name: string
  comment: string
  href: string
}

export function Selection(props: SelectionProps) {
  const { name, comment, href } = props

  return (
    <Link href={href}>
      <span>{name}</span>
      <span>{comment}</span>
    </Link>
  )
}
