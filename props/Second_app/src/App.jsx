import Student from "./components/student"

function App(){
  return (
    <>
      <h1>Student information</h1>
      <Student roll = {20} name = "Ram" height = {5.2} />
      <Student roll = {25} name = "Rohit" height = {3.2} />
    </>
  )
}

export default App
