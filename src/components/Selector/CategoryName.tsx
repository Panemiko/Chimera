interface CategoryNameProps {
  children: string
}

export function CategoryName(props: CategoryNameProps) {
  const { children } = props

  return (
    <div className='mb-6 mt-10'>
      <h1 className='text-neutral12 text-2xl text-center font-medium mb-2'>
        {children}
      </h1>
      <hr className='border-neutral6 border-px' />
    </div>
  )
}
