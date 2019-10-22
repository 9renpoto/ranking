import { random, internet } from 'faker'
import { Avatar, ProgressBar, Text } from '@primer/components'

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
