import { Rating, Typography } from "@mui/material"

export const StarRating:React.FC<{}>=()=>{
    return <>
    <Typography component="legend">Read only</Typography>
<Rating name="read-only" value={2} />
</>
}