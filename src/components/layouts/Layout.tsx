import { Component, JSX } from 'solid-js'
import Navbar from '../UI/Navbar'


interface Props {
  children: JSX.Element
}


const Layout: Component<Props> = props => {
  return (
    <div class="min-h-screen">
      <Navbar />
      <div>{props.children}</div>
    </div>
  )
}

export default Layout
