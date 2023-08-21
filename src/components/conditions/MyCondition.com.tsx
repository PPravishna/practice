import { useState } from "react"

export const MyCondition:React.FC<{}>=()=>{
let [isBhavaniWorking,setisBhavaniWorking]=useState(true)
    
    return <>
    <h1>Hello Iam condition topic</h1>
    {isBhavaniWorking==true?<>I will gift one phone to you</>:<>What gift</>}
    </>
}