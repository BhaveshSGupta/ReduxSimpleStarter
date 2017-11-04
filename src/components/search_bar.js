import React,{ Component } from 'react';

// Below is functional type of component
// const SearchBar = () =>{
//   return <input />;
// };
// Above is functional type of component

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state={term:''};
  }

  render(){
   return (
     <div>
     <input onChange={event=> this.setState({term: event.target.value}) } />
     </div>
   );
  }
}
export default SearchBar;
