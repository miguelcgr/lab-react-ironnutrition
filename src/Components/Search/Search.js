import React from 'react';

const Search = (props) => {
    const {updatelist} = props;
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem", margin:"30px"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     placeholder={"Search"}
     onChange={updatelist}
    />
  );
}

export default Search