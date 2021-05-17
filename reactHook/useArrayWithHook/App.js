import './App.css';
import React, {useState} from 'react'
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>


const App = () => {

    //  console.log(useState())
    //  var val="Punamchand code Concept";

    const [myName,setMyName]=useState("PC Coding")
    console.log(myName)

     const changeVal = () =>{
      //  val= "Youtube Channel PC coding";
      //  console.log(val)
       if (myName === "PC Coding"){
      setMyName("Coding with PC")
       }
       else{
         setMyName("PC Coding")
       }
     }



  return (
    <div className="container">
    <div>
      <h1>{myName}</h1>
      <button type="button" className="btn btn-primary" onClick={changeVal}>Click me plz..</button>
    
    </div>
    </div>

  )
}

export default App;


