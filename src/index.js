import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';

const API_KEY='';

YTSearch({key:API_KEY,term:'aaj jane ki ziid'},function(data) {
  console.log(data);
})

// Create a new component. This should produce some HTML
const App = function() {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
// Take this component's generated HTML and put it  on the page
ReactDom.render(<App />,document.querySelector('.container'));
