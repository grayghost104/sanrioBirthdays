import React from "react";
function Characters({indivSanrio}){
return (
  <div>
        <div  className="image">
        <img src = {indivSanrio.image} alt ="oh no"/>
        </div>
          <div className="header">{indivSanrio.name}</div>
          <span>
            <i className="b-days"/>
            {indivSanrio["b-day"]}
            </span>
          <div className="footer">{indivSanrio.description}</div>
    </div>
)
}

export default Characters;