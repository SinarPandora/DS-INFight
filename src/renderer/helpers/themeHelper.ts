import { useTheme } from 'vuetify'
import { computed } from 'vue'

export const useDarkTheme = () => {
  const theme = useTheme()
  return computed(() => theme.global.current.value.dark)
}
