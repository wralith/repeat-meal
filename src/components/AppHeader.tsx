import { Anchor, Button, createStyles, Group, Header, MediaQuery, Navbar, Title } from '@mantine/core'

const menuItems = ['Home', 'Statistics', 'Weekly']
const useStyles = createStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'space-between',
    padding: '0 1rem'
  },

  brandLogo: {
    color: theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.colors.brand[6]
  },

  navButton: {
    fontWeight: 'normal'
  }
}))

function AppHeader(props: any) {
  const { classes } = useStyles()

  return (
    <Group className={classes.container}>
      <Title order={3} className={classes.brandLogo}>
        Repeat Meal
      </Title>
      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Group>
          {menuItems.map(item => (
            <Anchor key={item}>
              <Button className={classes.navButton} variant="subtle">
                {item}
              </Button>
            </Anchor>
          ))}
        </Group>
      </MediaQuery>
    </Group>
  )
}

export default AppHeader
