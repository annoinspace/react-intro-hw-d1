import "./App.css"
import ButtonComponent from "./components/ButtonComponent"
import ClassComponent from "./components/ClassComponent"

function App() {
  return (
    <div className="App">
      <header className="My First React App">
        <ButtonComponent content="First Button" />
        <ButtonComponent content="Second Button" />
        <ClassComponent
          url="https://images.unsplash.com/photo-1520262389826-d559a9aca921?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt="tree on a hill covered with snow"
        />
      </header>
    </div>
  )
}

export default App
