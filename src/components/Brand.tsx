import { createStyles, Title } from '@mantine/core'
import { IconPizza } from '@tabler/icons'

const useStyles = createStyles(theme => ({
  brandLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    color: theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.colors.brand[6]
  }
}))

function Brand() {
  const { classes } = useStyles()

  return (
    <Title order={3} className={classes.brandLogo}>
      <IconPizza />
      Repeat Meal
    </Title>
  )
}

export default Brand
