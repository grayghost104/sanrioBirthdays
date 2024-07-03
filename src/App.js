import {useState, useEffect} from 'react'
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  // const [newUser, setNewUser] = useState([])
  const [allSanrio, setAllSanrio]=useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/data')
        .then(r=>r.json())
        .then(data=>{
            setAllSanrio(data)
        })


      //   function handleSubmit(addNew){
      //     fetch('http://localhost:4000/data2',{
      //         method:"POST",
      //        headers:{
      //         "Content-type" : "Apllication/json"
      //        },  
      //        body: JSON.stringify(addNew)  
      //     })
      //     .then(r=>r.json())
      //     .then(data=>{
      //       const newArr = [..., data]

      //     })
      // }
    })
  return (
    <div className="App">
     <img src="https://www.musubi-jp.com/blog/wp-content/uploads/2023/06/db0ada6079c47bd95a52efea0d1ac4d3.png" alt="Happy Sanrio Picnic"/>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login/>}/> */}
        <Route path="/allsanrio" setAllSanrio={setAllSanrio} allSanrio={allSanrio}/>
      </Routes>
      </BrowserRouter>
    </div>
      )
    }
    
    export default App;
    