import React from 'react';
import ReactDom from 'react-dom'

const API_KEY=''; 

// Create a new component. This should produce some HTML
const App = function() {
  return <div> hi! </div>;
}
// Take this component's generated HTML and put it  on the page
ReactDom.render(<App />,document.querySelector('.container'));
