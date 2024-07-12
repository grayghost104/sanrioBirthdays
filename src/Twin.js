import {useState} from 'react'
import EachBirthday from './Birthday'

function Twin ({allSanrio}){
    const [displayBirthday, setDisplayBirthday] = useState("")
    // console.log(displayBirthday)
    function handleChange(e){
        e.preventDefault()
        setDisplayBirthday(e.target.value);
    }
// function noBady(){
//     <div>
//         "Sorry there is no Sanrio for your birthday"
//     </div>
//     }
    const foundBirthday = allSanrio.filter((sanrio)=>{
        if (sanrio["b-day"].toLowerCase() === displayBirthday.toLowerCase() ){
            return sanrio
        }
        // else {
        //     return noBady
        // }
        // return false ("There is no Sanrio with your Birthday :( but thats okay, you can make your own!")
        
    }
)
return (
    <div>     
              <input type="text" onChange={handleChange} value={displayBirthday}/>
            {foundBirthday.map((birthday) => {
                return <EachBirthday birthday={birthday} key={birthday.id} />
            })}
        </div>
        
    )  
}



export default Twin;