import { Box } from "@mui/material";
import Terminal from "./Terminal";
import { info } from "../../info";
import Style from "./Aboutme.module.scss";
import MySkills from "./mySkills";
const AboutMe = () => {
  const aboutMeText = () => {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {info.firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cat about{info.firstName}{" "}
        </p>
        <p style={{ color: "white" }}>
          <span style={{ color: info.baseColor }}>
            about{info.firstName} <span className={Style.green}>(main)</span> ${" "}
          </span>
          {info.bio}
        </p>
      </>
    );
  };
 

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
    >
      <Terminal text={aboutMeText()} />
      <Terminal text={<MySkills/>}/>
    </Box>
  );
};
export default AboutMe;
