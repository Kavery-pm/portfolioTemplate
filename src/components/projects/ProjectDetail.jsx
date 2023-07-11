import { Box } from "@mui/material";
import IconLink from "./iconLink.jsx";

/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
const ProjectDetail = ( {image, live, source, title})=>{

return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box />
         <img src={image} style={{maxWidth:'80%',paddingBottom:'70px'}}/>
         <h1 style={{fontSize: '2rem'}}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
            </Box>
         </Box>
      </Box>
   );
}
export default ProjectDetail;