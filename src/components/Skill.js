import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
//import { Typography, Grid } from '@material-ui/core';
import '../styles/Skill.css';


const Skill = () => {
  //const classes = useStyles();
  
  return (
    <div className="skill-container">
      <div className="skill-title">
        Skill
      </div>
      <div className="skill-contents">
        
        <div className="skill-text">
          #React #Movie_app <br/>
          #VanillaJs #Momentum <br/>
          #Javascript #jQuery #HTML #CSS #Kakao_clone_app <br/>
          #REST_API #SI <br/>
          #Java #Spring #Oracle <br/>
        </div>
        <div className="skill-images"> 
          
            <img src="https://png.pngtree.com/svg/20170719/91de50e59c.svg" alt="js" title="js" className="skill-image js"/>
            <img src="https://kr.seaicons.com/wp-content/uploads/2015/07/Other-html-5-icon.png" alt="html" title="html" className="skill-image html"/>
            <img src="http://download.seaicons.com/icons/martz90/hex/512/css-3-icon.png" alt="css" title="css" className="skill-image css"/>
            <img src="https://berkarat.com/wp-content/uploads/2019/02/jquery.png" alt="jQuery" title="jQuery" className="skill-image jquery"/>
            <br/>
            <img src="https://images.velog.io/post-images/chez_bono/41036ef0-0ad4-11ea-afb5-17be3a4c91ce/React.jslogo-512.png" alt="react" title="react" className="skill-image react"/>
            <img src="https://cdn.iconscout.com/icon/free/png-256/java-57-1174929.png" alt="java" title="java" className="skill-image java"/>
            <img src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/oracle-512.png" alt="oracle" title="oracle" className="skill-image oracle"/>
        </div>
      </div>

    </div>
  );
};


export default Skill;