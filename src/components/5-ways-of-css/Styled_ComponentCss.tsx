import styled from "styled-components"
import { MyButton } from "./MyButton"

export const Styled_ComponentCss:React.FC<{}>=()=>{
    return <>
 <MyButton/>
 <MyButton/>
 <MyButton/>
 <Myh1>
<MyButton1 color="blue">Hello Iam a Button</MyButton1>
    </Myh1>   
    </>
}

let MyButton1=styled.button<{color:any}>`background-color:${(props:any)=>{return props.color}};`
let Myh1=styled.h1`color:green`