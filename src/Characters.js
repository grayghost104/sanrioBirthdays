import React from "react";
function Characters({indivSanrio}){
return (
  <div>
        <div  className="image">
        {indivSanrio.image ? <img src = {indivSanrio.image}/> : <img></img> }
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