/* eslint-disable react/prop-types */
import { Box } from "@mui/material";

const Toggler = ({darkMode,handleClick})=>{
return (
    <Box fontSize={'1.5 rem'}>
        {darkMode ?  (<span onClick={handleClick} aria-label="Full Moon" role="img">🌕</span>):
 
 (<span onClick={handleClick}  aria-label="New Moon" role="img">🌑</span>)}
    </Box>
)
}
export default Toggler;