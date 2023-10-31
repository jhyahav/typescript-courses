import * as React from 'react'

/**
 * @type param0
 */
const Loading: React.FC<React.PropsWithChildren<any>> = ({
  message = 'Loading...',
  children,
}) => (
  <h1>
    {message}...
    {children}
  </h1>
)
export default Loading
