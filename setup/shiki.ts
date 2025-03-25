import { defineShikiSetup } from '@slidev/types'
import githubDark from 'tm-themes/themes/github-dark.json'

export default defineShikiSetup(() => ({
  theme: githubDark as unknown,
}))
