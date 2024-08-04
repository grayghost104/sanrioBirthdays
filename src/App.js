import {useState, useEffect} from 'react'
import './App.css';
// import Characters from './Characters';
import Header from './Header';
import EachSanrio from './EachSanrio';
import HolidaySanrio from './Holiday';
import Popular from './Popular';
import Twin from './Twin';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [rankSanrio, setRankSanrio] = useState([])
  const [allSanrio, setAllSanrio]=useState([])
  const [sanrioHoliday, setSanrioHoliday] = useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/sanrio')
        .then(r=>r.json())
        .then(data=>{
            setAllSanrio(data)
          }) },[])

          useEffect(()=>{
            fetch('http://localhost:4000/Rank90List')
            .then(r=>r.json())
            .then(data=>{
                setRankSanrio(data)
              }) },[])
              useEffect(()=>{
                fetch('http://localhost:4000/holiday')
                .then(r=>r.json())
                .then(data=>{
                    setSanrioHoliday(data)
                  }) },[])

              function addSanrio(newHoliday){
                fetch("http://localhost:4000/holiday",{
                  method:'POST',
                  headers:{'Content-Type':'application/json'},
                  body: JSON.stringify(newHoliday)
                })
                .then(r=>r.json())
                .then(data=>{
                  const newHoliday = [...sanrioHoliday, data]
                  setSanrioHoliday(newHoliday)
                })
                
              
              }

              // function handleSubmit(newSanrio){
              //   fetch("http://localhost:5555/projects",{
              //     method:"POST",
              //     headers:{
              //       "Content-Type": "Application/json"
              //     },
              //     body: JSON.stringify(newSanrio)
              //   })
              //   .then(r=>r.json())
              //   .then(data=>{
              //     const newArr = [...allSanrio,data]
              //     setAllSanrio(newArr)
              //   })
              // }
    

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/holiday' element={<HolidaySanrio addSanrio={addSanrio} sanrioHoliday={sanrioHoliday}/>}/>
        <Route path='/popularity' element={<Popular rankSanrio={rankSanrio} setRankSanrio={setAllSanrio}/>}/> 
         <Route path="/allsanrio" element={<EachSanrio allSanrio={allSanrio}/> } />
        <Route path="/b-daytwin" element={<Twin allSanrio={allSanrio}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
      )
    }
    
    export default App;
    