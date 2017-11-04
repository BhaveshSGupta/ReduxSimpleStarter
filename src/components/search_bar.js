import React,{ Component } from 'react';

// Below is functional type of component
// const SearchBar = () =>{
//   return <input />;
// };
// Above is functional type of component

class SearchBar extends Component {
  render(){
   return <input onChange={event=>console.log(event.target.value) } />;
  }
}
export default SearchBar;
