import Head from 'next/head'

interface PageProps {
  children?: React.ReactNode
  title?: string
}

/**
 * Manages the page metadata.
 * Must be the parent of the page component
 */
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
