import {Box} from "@mui/material";
const Navbar = ()=>{
    const links = [
        {
            name: 'Home',
            to: '/',
            active: 'home'
        },
       
      
    ]
return (
    <>
      
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                 gap={{xs: '2rem', md: '8rem'}}
                 textTransform={'lowercase'} fontSize={'1rem'}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} 
                        >
                            <a href='/'>Home</a>
                       
                    </Box>
                ))}
               
            </Box>
        </Box>
    
    </>
)
}
export default Navbar;