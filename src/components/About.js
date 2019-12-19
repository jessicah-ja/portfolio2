import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
//import { Typography, Grid } from '@material-ui/core';

import '../styles/About.css';


const About = () => {
  //const classes = useStyles();
  
  return (
    <div className="about-container">
      <div className="about-title">
        About me
      </div>
      <div className="about-contents">
        <div className="about-image"> 
            <img src="../images/aboutme1.jpg" alt=""/>
        </div>
        <div className="about-text">
            안녕하세요. 책임감의 아이콘 황지애입니다. 한번 맡은 일은 해내고야 말죠!<br/>
            또한 항상 배움의 자세를 가지는 개발자입니다. 💯<br/>

            그동안의 경험으로 Back-end 개발자의 역할을 이해하고 소통하는 Front-end 개발자로서<br/>
            보다 완성된 결과물을 만들어낼수 있습니다.<br/>
            더 나아가는 Fullstack Web 개발자로 성장하려 합니다.
            <div className="about-icon">
                <a href="https://github.com/jessicah-ja" alt="" target="blank"> 
                    <div className="about-icon-git">
                    <img src="https://www.shareicon.net/data/512x512/2017/03/07/880593_media_512x512.png" alt=""/>
                    <p>github</p>
                    </div>
                </a>
                <a href="https://www.instagram.com/d_0321" alt="" target="blank"> 
                    <div className="about-icon-insta">
                        <img src="https://igtor.com/tasarim/og.png" alt=""/>
                        <p>instagram</p>
                    </div>
                </a>
                <a href="https://www.instagram.com/d_0321" alt="" target="blank"> 
                    <div className="about-icon-pdf">
                        <img src="https://image.flaticon.com/icons/png/512/80/80942.png" alt=""/>
                        <p>resume</p>
                    </div>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};


export default About;