export const PropsConcept:React.FC<{}>=()=>{
    return <>
    {Parent({improve:'watch'})}<br/>
    <Parent improve={"im another gift"}/><br/>
    {child()}

    </>
}
interface obj{improve:any}
let Parent:React.FC<obj>=(props)=>{
    console.log("----",props.improve)
    return <>im parent{props.improve}</>
}

let child=()=>{
    return <>value im child</>
}