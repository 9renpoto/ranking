import { storiesOf } from '@storybook/preact'
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

storiesOf('atoms', module)
  .add('Avatar', () => <Avatar width={20} height={20} />)
  .add('Box', () => (
    <Box>
      <Inner>{random.words()}</Inner>
      <Inner>{random.words()}</Inner>
    </Box>
  ))
  .add('Button', () => <Button>{random.word()}</Button>)
  .add('Hero', () => <Hero>{random.words()}</Hero>)
  .add('RankBar', () => <DefaultRankBar />)
