import { Fab } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

export const Floatingbutton:React.FC<{}>=()=>{
    return <>
    <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
</>
}