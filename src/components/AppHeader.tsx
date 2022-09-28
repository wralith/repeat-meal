import { Anchor, Burger, Button, createStyles, Drawer, Group, MediaQuery, Menu, Space, Stack } from '@mantine/core'

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

function AppHeader(props: any) {
  const { classes } = useStyles()
  const [burgerOpened, setBurgerOpened] = useState(false)

  return (
    <Group className={classes.container}>
      <Brand />

      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Group>{MenuItems(classes.navButton)}</Group>
      </MediaQuery>

      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <Menu>
          <Burger opened={burgerOpened} onClick={() => setBurgerOpened(!burgerOpened)} />
          <Drawer opened={burgerOpened} onClose={() => setBurgerOpened(false)} position="top">
            <Stack align="center">
              <Brand />
              <Space h="lg" />
              {MenuItems(classes.navButton)}
            </Stack>
          </Drawer>
        </Menu>
      </MediaQuery>
    </Group>
  )
}

export default AppHeader
