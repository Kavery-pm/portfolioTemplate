import { Box } from "@mui/material";
import { info } from "../../info"
import Style from './AboutMe.module.scss';

const Hobbies = ()=>{
return (
   
     <>
            <p><span style={{color: info.baseColor}}>{info.firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>
)
}
export default Hobbies