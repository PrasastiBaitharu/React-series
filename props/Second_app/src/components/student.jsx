//Creating variable for each props instead of using them directly
// function Student(props){
//     const roll = props.roll;
//     const name = props.name;
//     const height = props.height;
//     return (
//         <>
//             <h1>Your Roll is {roll}</h1>
//             <h1>Your Name is {name}</h1>
//             <h1>Your Height is {height}</h1>
//         </>
//     )
// }

//Using props by destructuring them
// function Student(props) {
//   const {roll , name , height} = props
//   return (
//     <>
//       <h1>Your Roll is {roll}</h1>
//       <h1>Your Name is {name}</h1>
//       <h1>Your Height is {height}</h1>
//     </>
//   );
// }

//Using props by destructuring them in the parameter
// function Student({ roll, name, height }) {
//   return (
//     <>
//       <h1>Your Roll is {roll}</h1>
//       <h1>Your Name is {name}</h1>
//       <h1>Your Height is {height}</h1>
//     </>
//   );
// }

//Props are immutable
function Student(props){
    props.roll=34;
    return(
        <>
            <h1>Your roll is {props.roll}</h1>
            <h1>Your name is {props.name} </h1>
            <h1>Your height i {props.height}</h1>
        </>
    )
}

export default Student;
