// import { useState } from "react";

function Rank({rankingSanrio}){
// const [search, setSearch] = useState("")
// const searchRanked = rankingSanrio.filter((ranSanrio)=>{
//     if(ranSanrio.name.toLowerCase().include(search)){
//         return true 
//     }
//     return false 
// })
 
    return(
        <div>
        <div  className="image">
        <img src = {rankingSanrio.rankimg} alt ="oh no"/>
        </div>
          <div className="header">{rankingSanrio.name}</div>
            <i className="b-days"/>
            {rankingSanrio.Ranking} 👑
    </div>
    )
}
export default Rank;