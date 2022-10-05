import { Grid } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import AppLayout from './components/AppLayout'
import History from './features/History/History'
import WeeklyPlan from './features/WeeklyPlan/WeeklyPlan'

function App() {
  const smallView = useMediaQuery('(max-width: 768px)')

  return (
    <AppLayout>
      <Grid>
        <Grid.Col span={smallView ? 12 : 9}>
          <WeeklyPlan />
        </Grid.Col>
        <Grid.Col span={3} style={{ display: smallView ? 'none' : 'flex' }}>
          <History />
        </Grid.Col>
      </Grid>
    </AppLayout>
  )
}

export default App
