import { useTheme } from 'vuetify'

export const useDarkTheme = () => {
  const theme = useTheme()
  return () => theme.global.current.value.dark
}
