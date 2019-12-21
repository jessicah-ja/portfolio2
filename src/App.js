import React from 'react';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import Banner from "./components/Banner";
import About from "./components/About";
import Skill from "./components/Skill";
import Contact from "./components/Contact";



import "./App.css";

/*
class MySection extends React.Component {
  render() {
    return (
      <div className="section">
        <h3>{this.props.content}</h3>
      </div>
    );
  }
}
*/

const anchors = ["firstPage", "secondPage", "thirdPage", "forthPage"];

const FullpageWrapper = () => (
  <ReactFullpage
    menu='#header-menu'
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    sectionsColor={["#111518", "#dfe6e9", "#111518", "#dfe6e9"]}
    onLeave={(origin, destination, direction) => {
      //console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      //console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        <div>
          <div className="header-menu" id="header-menu">
              <div>
                  <div className="header-text">
                      <ul>
                          <a href="#forthPage"><li className="header-li">Contact</li></a>
                          <a href="#thirdPage"><li className="header-li">Skill</li></a>
                          <a href="#secondPage"><li className="header-li">About</li></a>
                          <a href="#firstPage"><li className="header-li">Home</li></a>
                      </ul>
                  </div>
                  <div className="blank-white"></div>
              </div>
          </div>
          <div className="section" >
            <Banner />
          </div>
          <div className="section" >
            <About/>
          </div>
          <div className="section" >
            <Skill />
          </div>
          <div className="section" >
            <Contact />
          </div>
        </div>
      );
    }}
  />
);


function App() {

  return (
    <div >
      <header>
        <FullpageWrapper />
      </header>
    </div>
  );
}

export default App;
