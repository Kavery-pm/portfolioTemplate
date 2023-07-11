import { Box,Grid } from "@mui/material";
import { info } from "../../info";

const Project = ()=>{
return (
    <Box>
    <Grid container display={'flex'} justifyContent={'center'}>
        {info.portfolio.map((project, index) => (
           <Grid item xs={12} md={6} key={index}>
            <img src={project.image}/>
           </Grid>
        ))}
    </Grid>
</Box>
)
}
export default Project;