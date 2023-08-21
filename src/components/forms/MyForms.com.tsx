import { Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";

export const MyForms:React.FC<{}>=()=>{
    let [name,setName]=useState('')
    const formik = useFormik({
        initialValues: {name:'' },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    
    return <>
       <form onSubmit={formik.handleSubmit}>
    <Grid
  container
  direction="column"
  justifyContent="space-between"
  alignItems="center">

<TextField id="outlined-basic"
name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
         label="name" variant="outlined" />
         <br />
      <Button type="submit" variant="contained" color='primary'>clickm me</Button>

</Grid>

    </form>
    </>
}