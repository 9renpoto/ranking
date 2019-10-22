import { random, image } from 'faker'
import { Avatar } from '@primer/components'
import { Bar, Name } from '.'

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

export const RankBars = () => <DefaultRankBar />
