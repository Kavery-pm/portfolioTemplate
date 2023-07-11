import {Box} from "@mui/material";
const Terminal = ()=>{
    return (
        <Box component={'section'} 
        width={{xs: '80%', md: '50%'}} borderRadius={'0.5rem'} mb={'4rem'}>
      <Box sx={{backgroundColor: '#8c8c8c'}} p={'0.5rem'} borderRadius={'0.5rem 0.5rem 0 0'}
           fontSize={'1rem'}>
       <h1>hello</h1>
      </Box>
      <Box py={{xs: '1rem', md: '2rem'}} px={{xs: '2rem', md: '3rem'}} borderRadius={'0 0 0.5rem 0.5rem'}
           sx={{backgroundColor: '#27242f'}} fontSize={'1.5rem'} fontFamily={'Courier New, Courier, monospace'}>
    <p>hi </p>
      </Box>
   </Box>
    )

}
export default Terminal;