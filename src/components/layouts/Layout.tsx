import { Component, For, JSX } from 'solid-js'
import { TbCarrot } from 'solid-icons/tb'

interface NavbarLink {
  title: string
}

interface Props {
  children: JSX.Element
}

const navbarLinks: NavbarLink[] = [{ title: 'Home' }, { title: 'Weekly' }, { title: 'Statistics' }]

const Layout: Component<Props> = props => {
  return (
    <div class="min-h-screen">
      <nav class="flex justify-between items-center p-3 bg-base-300/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <h3 class="btn-ghost btn text-xl font-bold text-primary gap-2">
          <TbCarrot size={30}/> <span>Repeat Meal</span>
        </h3>
        <ul class="gap-3 hidden md:flex">
          <For each={navbarLinks}>
            {link => (
              <li>
                <a class="btn btn-ghost">{link.title}</a>
              </li>
            )}
          </For>
        </ul>
      </nav>
      <div>{props.children}</div>
    </div>
  )
}

export default Layout
