import { mycss } from "./externalcss"

export const ExternalCSSwithJS:React.FC<{}>=()=>{
    return<>
    <h1>Iam an External CSS with JS</h1>
    <div style={mycss}></div>
    </>
}