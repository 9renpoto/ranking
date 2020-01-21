import initStoryshots, {
  multiSnapshotWithOptions
} from '@storybook/addon-storyshots'
import { styleSheetSerializer } from 'jest-styled-components'
import { addSerializer } from 'jest-specific-snapshot'

addSerializer(styleSheetSerializer)

initStoryshots({
  framework: 'react',
  suite: 'FileProperties',
  test: multiSnapshotWithOptions({})
})
