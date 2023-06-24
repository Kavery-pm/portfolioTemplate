import {Box} from "@mui/material";
import Style from './Home.module.scss';
const Home = ()=>{
   let colors = [" rgb(131,58,180),rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%"];
 
  
   
    return (
        <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
              <h1>Hi, I'm <span style={{background:  `linear-gradient(135deg, ${colors})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Kavery</span><span className={Style.hand}>🤚</span></h1>
           </Box>
    )
}
export default Home;