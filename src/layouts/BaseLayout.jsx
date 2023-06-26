import {Box, Grid} from "@mui/material";
import Navbar from "../components/home/NavBar/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "../components/home/home";

const BaseLayout = ()=>{
    return (
        <Box>
             <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
            <Grid item>
             <Navbar/>
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home/>}/>
                  
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                    py={'1.5rem'} sx={{opacity: 0.7}} width={'100%'}>
                  <p>template created with &hearts; by<span>Shiny Kavery</span></p>
                  <p>&copy; 2023</p>
               </Box>
            </Grid>
         </Grid>
        </Box>

    )
}
export default BaseLayout;