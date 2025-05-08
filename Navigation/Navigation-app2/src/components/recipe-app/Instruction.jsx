import styles from "./instruction.module.css"
export default function Instruction({instruction}){
    return(
        <div className={styles.instruction}>
            <h3 className={styles.heading}>Instruction</h3>
            <hr />
            {
                instruction.map((inst)=>{
                    return <p key={inst}>{inst}</p>
                })
                
            }
            
        </div>
    )
}