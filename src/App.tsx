import type { Component } from 'solid-js'
import weekStore from '@/stores/weekStore'
import Layout from '@/components/layouts/Layout'
import WeeklyTable from '@/components/WeeklyTable/WeeklyTable'

const App: Component = () => {
  console.log(weekStore)

  return (
    <Layout>
      <WeeklyTable weekMenu={weekStore.get} />
    </Layout>
  )
}

export default App
