import { useState } from "react"


export const MyEvents:React.FC<{}>=()=>{
    let [userData,setUserdata]=useState(['apple','boll','cat',"dog"])

    let handleChange=(e:any)=>{console.log(e.target.value)
    setUserdata([userData,e.target.value])}
    
    
    return<>
    <input type="text" onChange={ handleChange} name="" id="" />
    {userData?.map((item)=>{return <div>{item}</div>})}
    </>
}

