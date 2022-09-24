import { TbCarrot } from 'solid-icons/tb'
import { For } from 'solid-js'
import { TiThMenu } from 'solid-icons/ti'

interface NavbarLink {
  title: string
}
const navbarLinks: NavbarLink[] = [{ title: 'Home' }, { title: 'Weekly' }, { title: 'Statistics' }]

const Navbar = () => {
  return (
    <nav class="flex justify-between items-center p-3 bg-base-300/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <h3 class="btn-ghost btn text-xl font-bold text-primary gap-2">
        <TbCarrot size={30} /> <span>Repeat Meal</span>
      </h3>
      <div class="dropdown dropdown-end md:hidden">
        <label class="btn m-1" tabIndex={0}>
          <TiThMenu />
        </label>
        <ul tabIndex={0} class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <For each={navbarLinks}>
            {link => (
              <li>
                <a class="btn btn-ghost">{link.title}</a>
              </li>
            )}
          </For>
        </ul>
      </div>
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
  )
}

export default Navbar
