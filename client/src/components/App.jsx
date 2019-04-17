import React from 'react';
import styled from 'styled-components';
import RatingsModule from './RatingsApp';
import HistoryModule from './HistoryApp';

const App = () => (
  <BothModules>
    <Module>
      <RatingsModule />
    </Module>
    <Module>
      <HistoryModule />
    </Module>
  </BothModules>
);

const BothModules = styled.div`
  width: 700px + .05vw;
  padding-left: 40px;

@font-face {
  font-family: DIN Pro;
  font-weight: normal;
  src: url("fonts/DINProRegular.otf") format("opentype");
}

@font-face {
  font-family: DIN Pro;
  font-weight: bold;
  src: url("lib/DIN Alternate\ Bold.ttf") format("truetype");
}

@font-face {
  font-family: DIN Pro;
  font-weight: 300;
  src: url("lib/DIN\ Condensed\ Bold.ttf") format("truetype");
}

body, p, div {
  font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
  font-weight: normal;
}

a {
  color: #21ce99;
  text-decoration: none;
  font-size: 13px;
  line-height: 19px;
  text-align: start;  
  letter-spacing: 0.05px; 
}
a:hover {
  color: #1ae9aa;
  transition-duration: 300ms;
}

`;
const Module = styled.section`
  -webkit-transition: background 300ms;
  transition: background 300ms;
`;

export default App;
