import Item from "./Item"

export default function List({list}){
    return(
        <>
            {
                list.map((item)=>{
                    return <Item key={item} item={item}/>
                })
            }
        </>
    )
}