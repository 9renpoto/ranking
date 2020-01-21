import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import requireContext from 'require-context.macro'
import { theme } from '@primer/components'
import { ThemeProvider } from 'styled-components'

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)

configure(requireContext('../', true, /story.tsx$/), module)
