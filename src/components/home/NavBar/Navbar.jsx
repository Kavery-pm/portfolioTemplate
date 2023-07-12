/* eslint-disable react/prop-types */
import {Box} from "@mui/material";
import Style from './Navbar.module.scss';
import {Link,useLocation} from "react-router-dom";
import { useState } from "react";
import Toggler from "../Toggler";
let colors = [" rgb(131,58,180),rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%"];
const Navbar = ({darkMode,handleClick})=>{
    const location = useLocation();
    console.log(location.pathname)
   
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));
    const links = [
        {
            name: 'Home',
            to: '/',
            active: 'home'
        },
        {
            name: 'About Me',
            to: '/aboutme',
            active: 'about'
        },
        {
            name:'projects',
            to:'/projects',
            active:'projects'
        }
      
    ]
return (
    <>
      
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                 gap={{xs: '2rem', md: '8rem'}}
                 textTransform={'lowercase'} fontSize={'1rem'}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} 
                    sx={{borderImageSource:  `linear-gradient(135deg, ${colors})`}}  className={(link.active === active && !link.type) && Style.active}>
                             <Link to={link.to} onClick={() => setActive(link.active)} className={Style.link}>
                            {!link.type && <p style={{padding: '0.5rem 0'}}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                       
                    </Box>
                ))}
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick}/>
                </li>
            </Box>
        </Box>
    
    </>
)
}
export default Navbar;