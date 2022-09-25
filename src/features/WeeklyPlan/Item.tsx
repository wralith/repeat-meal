import { Meal } from '@/interfaces'
import { Code, createStyles, Paper, Space, Text, Title } from '@mantine/core'

const useStyles = createStyles(theme => ({
  item: {
    width: 'fit',
    minWidth: '18rem',
    height: '12rem',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.colors.brand[1]
  }
}))

interface Props {
  meal: Meal
}

function Item({ meal }: Props) {
  const { classes } = useStyles()

  return (
    <Paper className={classes.item} shadow="sm" radius="md" p="lg">
      <Code>00:00</Code>
      <Space h="sm" />
      <Title order={4}>{meal.name}</Title>
      <Text>{meal.description}</Text>
    </Paper>
  )
}

export default Item
