import "./App.css"
import ButtonComponent from "./components/ButtonComponent"

function App() {
  return (
    <div className="App">
      <header className="My First React App">
        <ButtonComponent content="First Button" />
        <ButtonComponent content="Second Button" />
      </header>
    </div>
  )
}

export default App
