/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchUtils } from 'ra-core'

// TO DO add proper type for options
const fetchJson = (url: string, options: any = {}) => {
  options.user = {
    authenticated: true,
    // TO DO add token from context
    token: 'mockToken'
  }
  return fetchUtils.fetchJson(url, options)
}

export { fetchJson }
