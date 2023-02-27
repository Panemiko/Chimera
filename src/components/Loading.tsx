import clsx from 'clsx'
import { AiOutlineLoading as LoadingIcon } from 'react-icons/ai'

type LoadingProps = React.ComponentProps<'svg'>

/**
 * Animation to loading
 */
export function Loading(props: LoadingProps) {
  return (
    <LoadingIcon
      {...props}
      className={clsx(['animate-spin', props.className])}
    />
  )
}
