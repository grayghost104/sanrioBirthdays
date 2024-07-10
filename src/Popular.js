import Rank from "./Ranked";

function Popular({rankSanrio, setRankSanrio}){
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