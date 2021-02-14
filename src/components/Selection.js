import React, { useState } from "react";

 

const Selection = (prop)=>{
  const [background,changebackground]=useState({background:''});

  const updateSelection = (background) =>{
    changebackground(background);
}
  return(
      <div className="fix-box" style={background} onClick={() =>prop.applyColor(updateSelection)}
      >
          <h2 className="subheading">Selection</h2>
      </div>
  )
}

export default Selection;
