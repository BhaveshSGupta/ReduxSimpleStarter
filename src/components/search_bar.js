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
     <div className="search-bar col-md-12">
     <input
      value={this.state.term}
      onChange={event=> this.onInputChange(event.target.value)} />
     </div>
   );
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  };
}
export default SearchBar;
