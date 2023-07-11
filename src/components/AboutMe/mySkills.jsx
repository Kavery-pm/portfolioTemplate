import { info } from "../../info";
import Style from './mySkills.module.scss';
const MySkills = () => {
    return (
    <>
      <p><span style={{color: info.baseColor}}>{info.firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
      </p>
      <p><span style={{color: info.baseColor}}>skills/tools <span
          className={Style.green}>(main)</span> $</span> ls</p>
      <p style={{color: info.baseColor}}> Proficient With</p>
    <ul className={Style.skills}>
      {info.skills.proficientWith.map((item,index)=>(<li key={index} >{item}</li>))}
    </ul>
    <ul>
    <p style={{color: info.baseColor}}> Exposed To</p>
    {info.skills.exposedTo.map(item=>(<li key={item}>{item}</li>))}
    </ul>
    
   
  </>
    );
  };
  export default MySkills;