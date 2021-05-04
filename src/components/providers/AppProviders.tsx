import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core'
import { ThemeProvider } from 'styled-components'

import { AuthProvider } from 'components/providers/AuthProvider'
import { theme } from 'themes'

interface AppProvidersProps {
  children: ReactNode
}

const queryClient = new QueryClient()

const AppProviders = (
  { children }: AppProvidersProps
): JSX.Element => (
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </MuiThemeProvider>
    </QueryClientProvider>
  </AuthProvider>
)

export { AppProviders }
