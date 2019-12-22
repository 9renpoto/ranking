import initStoryshots, {
  multiSnapshotWithOptions
} from '@storybook/addon-storyshots'
import styleSheetSerializer from 'jest-styled-components/src/styleSheetSerializer'
import { addSerializer } from 'jest-specific-snapshot'

addSerializer(styleSheetSerializer)

initStoryshots({
  storyKindRegex: /^((?!.*?Dont Test).)*$/,
  storyNameRegex: /^((?!.*?Dont Test).)*$/,
  framework: 'react',
  suite: 'FileProperties',
  test: multiSnapshotWithOptions({})
})
