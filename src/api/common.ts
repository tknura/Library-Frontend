interface Response {
  message: string
  status: string
  timestamp: string
}

interface Error extends Response {
  errorCause: string
}

export type { Response, Error }
