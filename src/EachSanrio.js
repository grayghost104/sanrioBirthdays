import Characters from "./Characters"
import Twin from "./Twin"
function EachSanrio({allSanrio}){
  const mappedSanrio = allSanrio.map(indivSanrio=>{
    return (<Characters indivSanrio={indivSanrio} key={indivSanrio.id}/>
    )
  })
  // console.log(mappedSanrio)
  return (
    <div>
  {mappedSanrio}
      <Twin allSanrio={allSanrio}/>
    </div>
  )
}
  export default EachSanrio