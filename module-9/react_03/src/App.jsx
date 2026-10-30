import Person from "./components/Person"

function App() {
  return (
    <div>
      <h1> Welcome to props lecture </h1>
      <Person naam="Sam" age={26} isMale={true} />
      <Person naam="Mav" age={4} isMale={false} />
    </div>
  )
}

export default App