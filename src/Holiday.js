import React from "react"
function HolidaySanrio({addSanrio, sanrioHoliday}){
    return (
            <>
        <h1 style={{color: "red"}}>Happy Holidays!!</h1>
        <form onSubmit={(e)=>{
            e.preventDefault()
            const hSanrio ={
                himg: e.target["image"].value,
                feeling: e.target["feeling"].value, 
                favSanrio: e.target["favSanrio"].value
            }
            addSanrio(hSanrio)
        }}>
        <input type="text" name="image" placeholder="Image URL" />
        <input type="text" name="feeling" placeholder="Your feelings" />
        <input type="text" name="favSanrio" placeholder="Favorite Sanrio" />
        <button type="submit">Add Holiday Sanrio</button>
        </form>
        {
            sanrioHoliday.map((holiday) => {
                return (
                    <>
                    {holiday.himg ? <img src = {holiday.himg} /> : <img></img>}
          <div className="header">{holiday.feeling}</div>
          <div className="footer">{holiday.favSanrio}</div>
                    </>
                )
            })
        }
        </>
     
    )
}

export default HolidaySanrio;
