import { random, image } from 'faker'
import { Avatar, Box, Inner, Button, Hero, Bar, Name } from '.'

function DefaultRankBar() {
  return (
    <Bar style={{ width: `${random.number({ max: 100 })}%` }}>
      <Avatar width={0.938} height={0.938}>
        <img src={image.imageUrl(300, 300)} alt={random.word()} />
      </Avatar>
      <Name white padding={0}>
        {random.word()}
      </Name>
    </Bar>
  )
}

export default { title: 'atoms' }

export const Avatars = () => <Avatar width={20} height={20} />
export const Boxes = () => (
  <Box>
    <Inner>{random.words()}</Inner>
    <Inner>{random.words()}</Inner>
  </Box>
)
export const Buttons = () => <Button>{random.word()}</Button>
export const Heros = () => <Hero>{random.words()}</Hero>
export const RankBars = () => <DefaultRankBar />
