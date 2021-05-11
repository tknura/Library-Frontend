import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core'
import { ThemeProvider } from 'styled-components'

import { AuthProvider } from 'components/providers/AuthProvider'
import { theme } from 'themes'
import { FetchProvider } from './FetchProvider'

interface AppProvidersProps {
  children: ReactNode
}

const queryClient = new QueryClient()

const AppProviders = (
  { children }: AppProvidersProps
): JSX.Element => (
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <FetchProvider>
        <StylesProvider injectFirst>
          <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
              {children}
            </ThemeProvider>
          </MuiThemeProvider>
        </StylesProvider>
      </FetchProvider>
    </QueryClientProvider>
  </AuthProvider>
)

export { AppProviders }
