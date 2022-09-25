import { ReactNode } from 'react'
import { AppShell, Header, useMantineTheme } from '@mantine/core'
import AppHeader from './AppHeader'

function AppLayout({ children }: { children: ReactNode }) {
  const theme = useMantineTheme()

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]
        }
      }}
      asideOffsetBreakpoint="sm"
      header={
        <Header height={70} p="md">
          <AppHeader />
        </Header>
      }
    >
      {children}
    </AppShell>
  )
}

export default AppLayout
