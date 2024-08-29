import { ThemeDefinition } from 'vuetify'
import colors from 'vuetify/util/colors'

export const themes: { [name: string]: ThemeDefinition } = {
  light: {
    colors: {
      primary: colors.deepPurple.darken3, // deep-purple-darken-3
      info: colors.teal.darken1,
      secondary: colors.grey.darken3,
      surface: colors.grey.lighten4,
      background: colors.grey.lighten4
    }
  },
  dark: {
    colors: {
      primary: colors.deepPurple.darken1, // deep-purple-darken-1
      info: colors.teal.lighten1,
      secondary: colors.grey.base
    }
  }
}
