import Rank from "./Ranked";
// import { useState } from "react";

function Popular({rankSanrio, setRankSanrio}){
    // const [search, setSearch] = useState("")
    
    
    const rankedSanrio = rankSanrio.map(rankingSanrio=>{
        return (<Rank rankingSanrio={rankingSanrio} key={rankingSanrio.id}/>)
    })
    return (
        <div>
      {rankedSanrio}
        </div>
    )
}

export default Popular;
// const searchRanked = rankSanrio.filter((ranSanrio)=>{
//     if(ranSanrio.name.toLowerCase().include(search)){
//         return true 
//     }
//     return false 
// })