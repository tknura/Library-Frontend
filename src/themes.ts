import { createMuiTheme } from '@material-ui/core'

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    accents: Palette['primary'];
  }
  interface PaletteOptions {
    accents: PaletteOptions['primary'];
  }
}

export const theme = createMuiTheme(
  {
    palette: {
      accents: {
        main: '#ffffff',
      },
      primary: {
        main: '#6772e5',
      },
      background: {
        default: '#ffffff',
        paper: '#ECECEC'
      }
    },
  }
)
