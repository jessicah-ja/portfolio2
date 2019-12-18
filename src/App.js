import React from 'react';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import Banner from "./components/Banner";


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
    sectionsColor={["#111518", "#ff5f45", "#0798ec", "#ff5f45"]}
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
                          <li className="header-li">Contact</li>
                          <li className="header-li">About</li>
                          <li className="header-li">Skill</li>
                          <a href="#secondPage"><li className="header-li">Project</li></a>
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

          </div>
          <div className="section" ></div>
          <div className="section" ></div>
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
