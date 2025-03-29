export default function Item({item}){
    return <h3>{item} <button onClick={handleClick}>x</button> </h3>
    function handleClick(){
        console.log("hello",item)
    }
}

