import { Box,Grid } from "@mui/material";
import { info } from "../../info";
import ProjectDetail from "./ProjectDetail";

const Project = ()=>{
return (
    <Box>
    <Grid container display={'flex'} justifyContent={'center'}>
        {info.portfolio.map((project, index) => (
           <Grid item xs={12} md={12} key={index}>
            <ProjectDetail image={project.image} live={project.source} source={project.source} title={project.title}/>
           </Grid>
        ))}
    </Grid>
</Box>
)
}
export default Project;