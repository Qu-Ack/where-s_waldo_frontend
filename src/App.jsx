import { useState } from 'react'
import './App.css'

function App() {
  const [isVisible , setIsVisible] = useState(false);
  const [position , setPosition] = useState({x:0, y:0});

  function handleMouseDown(e) {
    setIsVisible(true)
    let x_coordinate = e.clientX;
    let y_coordinate = e.clientY;
    setPosition({x:x_coordinate, y:y_coordinate});
    console.log(position)    
  }



  return (
    <div className="image" onMouseDown={handleMouseDown} style={{position:'relative'}} >
      {isVisible && (
        <div style={{position:'absolute', top:position.y, left:position.x, color:'red', background:'black'}}> 
          <ul className='dropdown'>
            <li className='option'>Bob</li>
            <li className='option'>Rob</li>
            <li className='option'>Lob</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default App
