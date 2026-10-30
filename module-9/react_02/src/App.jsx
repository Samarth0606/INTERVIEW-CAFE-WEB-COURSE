import Nano, { BMW, Merc } from "./components/Car"
import Person from "./components/Person"

function App() {
  return (
    <section>
      <h1>Welcome to app.jsx</h1>
      <Person />
      <BMW />
      <Merc />
      {/* <Nanooooo /> */}
      <Nano />
      
    </section>
  )
}

export default App