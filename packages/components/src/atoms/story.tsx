import { Avatar, ProgressBar, Text } from '@primer/components'
import { internet, random } from 'faker'

export default { title: 'atoms' }

export function RankBars() {
  return (
    <>
      <Avatar src={internet.avatar()} />
      <Text mr={3}>{random.word()}</Text>
      <ProgressBar progress={random.number({ max: 100 })} />
    </>
  )
}
