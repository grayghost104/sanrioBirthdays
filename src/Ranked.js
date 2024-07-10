
function Rank({rankingSanrio}){
 
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