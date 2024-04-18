import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const [colorType, setColorType] =useState("hex")
  let[color ,setColor]= useState("#000000")
   function handleRandonHEXColor(){
    const hexColor= Math.floor(Math.random() * 900000) + 100000;
    setColor(`#${hexColor}`);
    setColorType("HEX")
  
   }
   function handleRandonRGBColor(){
    let r = Math.floor(Math.random()*256)+1;
    let g = Math.floor(Math.random()*256)+1;
    let b = Math.floor(Math.random()*256)+1;
    let rgb= `rgb(${r},${g},${b})`
    setColor(rgb)
    setColorType("RGB")
   

   }
  return (
    <>
      <div className="container" style={
        {
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          background:color,
          width: "100vw",
          height: "100vh"
        }
      }>
        <h3 style={{color:"white"}}>Random Color Generator</h3>
        <button onClick={()=>handleRandonHEXColor()} style={
          {
           
           
            border:"none",
            padding:"10px",
            cursor:"pointer",
            width:"200px",
            borderRadius:"20px"
          }
        }>Generate Random Hex Color</button>
        <button onClick={()=>handleRandonRGBColor()} style={
          {
         
            
            border:"none",
            padding:"10px",
            cursor:"pointer",
            width:"200px",
            borderRadius:"20px",
            marginTop:"10px"
          }
        }>Generate Random RGB Color</button>

        <h2>{colorType} Color Generated of value <span style={{background:"white"}}> {color}</span> </h2>
        
      </div>
    </>
  )
}

export default App
