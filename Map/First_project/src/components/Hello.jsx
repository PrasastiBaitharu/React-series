const name = "Ram"
const age = 20;
const height = 5.9;
const hobbies = ["Photography" , "Travelling" , "Reading books"]

function message(){
  return <p>Good luck for react carrier</p>
}

function Hello(){
  return(
    <>
      <h1>Your name is {name}</h1>
      <p>You are {age} years old</p>
      <p>You are {height} feet tall </p>
      {
        hobbies.map((hobby)=>{ return <span>{hobby} ,</span>})
      }
      <p>Total Rating = {10+20+30}</p>
      {message()}
    </>
  )
}


export default Hello;
