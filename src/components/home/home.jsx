import {Box} from "@mui/material";
import Style from './Home.module.scss';
import classNames from 'classnames';
const Home = ()=>{
   let colors = [" rgb(131,58,180),rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%"];
 
  
   
    return (
        <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
              <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{background: `linear-gradient(135deg, ${colors})`}} component={'img'} src='https://avatars.githubusercontent.com/u/94916344?s=400&u=8c13f4ddcdb11182a6b4daebb08619a691e4309e&v=4' width={{xs: '35vh', md: '40vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box></Box>
              <h1>Hi, I'm <span style={{background:  `linear-gradient(135deg, ${colors})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Kavery</span><span className={Style.hand}>🤚</span></h1>
              <h2>I'm Frontend Developer.</h2>
           </Box>
    )
}
export default Home;