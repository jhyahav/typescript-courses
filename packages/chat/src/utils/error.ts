/**
 * Stringify an Error instance
 * @param err - The error to stringify
 */
function stringifyErrorValue(err: Error) {
  return `${err.name.toUpperCase()}: ${err.message}
  ${err.stack || '(no stack trace information)'}`
}

/**
 * Stringify a thrown value
 *
 * @param errorDescription
 * @param err
 */
export function stringifyError(
  errorDescription: string,
  err: unknown,
) {
  return `${errorDescription}\n${
    err instanceof Error
      ? stringifyErrorValue(err)
      : err
      ? '' + err
      : '(missing error information)'
  }`
}
