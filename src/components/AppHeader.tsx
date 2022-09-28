import { Anchor, Burger, Button, createStyles, Drawer, Group, Paper, Space, Stack } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { useState } from 'react'
import Brand from './Brand'

const menuItems = ['Home', 'Statistics', 'Weekly']
const useStyles = createStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'space-between',
    padding: '0 1rem'
  },

  navButton: {
    fontWeight: 'normal'
  }
}))

const MenuItems = (navButton: string) =>
  menuItems.map(item => (
    <Anchor key={`lg-${item}`}>
      <Button className={navButton} variant="subtle">
        {item}
      </Button>
    </Anchor>
  ))

function AppHeader() {
  const { classes } = useStyles()
  const smallView = useMediaQuery('(min-width: 768px)')

  const [burgerOpened, setBurgerOpened] = useState(false)

  return (
    <Group className={classes.container}>
      <Brand />

      <Group style={{ display: !smallView ? 'none' : 'flex' }}>{MenuItems(classes.navButton)}</Group>

      <Paper style={{ display: smallView ? 'none' : 'flex' }}>
        <Burger opened={burgerOpened} onClick={() => setBurgerOpened(!burgerOpened)} />
        <Drawer opened={burgerOpened} onClose={() => setBurgerOpened(false)} position="top">
          <Stack align="center">
            <Brand />
            <Space h="lg" />
            {MenuItems(classes.navButton)}
          </Stack>
        </Drawer>
      </Paper>
    </Group>
  )
}

export default AppHeader
