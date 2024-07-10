import React from "react";
function EachBirthday({birthday}){
 
  return (
    <div>
        <div  className="image">
        <img src = {birthday.image} alt ="oh no"/>
        </div>
          <div className="header">{birthday.name}</div>
          <span>
            <i className="b-days"/>
            {birthday["b-day"]}
            </span>
          <div className="footer">{birthday.description}</div>
    </div>
)
}

export default EachBirthday;