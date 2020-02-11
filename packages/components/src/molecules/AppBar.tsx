import { Box, Sticky } from '@primer/components'

export default function AppBar() {
  return (
    <Box as='header'>
      <Sticky top={0} p={4}>
        ranking 🤔
      </Sticky>
    </Box>
  )
}
