import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import requireContext from 'require-context.macro'
import { theme, BaseStyles } from '@primer/components'
import { ThemeProvider } from 'styled-components'

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <BaseStyles />
    {story()}
  </ThemeProvider>
))

configure(requireContext('../', true, /story.tsx$/), module)
