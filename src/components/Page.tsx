import Head from 'next/head'

interface PageProps {
  children?: React.ReactNode
  title?: string
}

export function Page(props: PageProps) {
  const { children, title } = props

  const pageTitle = title ? `${title} | Chimera` : 'Chimera'

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {children}
    </>
  )
}
