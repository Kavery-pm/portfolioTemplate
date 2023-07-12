import {Box, Grid} from "@mui/material";
import Navbar from "../components/home/NavBar/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "../components/home/home";
import AboutMe from "../components/AboutMe/aboutMe";
import Project from "../components/projects/project";
import Style from './BaseLayout.module.scss'
import { useState } from "react";
import { useEffect } from "react";
const BaseLayout = ()=>{
const [darkMode, setdarkMode] = useState(true);
useEffect(() => {
   let detectedDarkMode = eval(localStorage.getItem('darkMode'));
   console.log(detectedDarkMode);
   if (detectedDarkMode) {
      setdarkMode(detectedDarkMode)
   } else {
      localStorage.setItem('darkMode', 'false')
   }
}, [])

const handleToggleDarkMode=()=> {
   let oppositeOfCurrentDarkMode = !darkMode
   localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`)
   setdarkMode(oppositeOfCurrentDarkMode)
}
    return (
        <Box className={darkMode ? Style.dark : Style.light} >
             <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
          <Grid item>
             <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode}/>
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home/>}/>
                  <Route exact path={'/aboutme'} element={<AboutMe/>}/>
                  <Route exact path={'/projects'} element={<Project/>}/>
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