import './App.css'
import { useState } from 'react'



function App() {

    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    function handleClick(e) {
        setVisible(true);
        setPosition({ x: e.clientX, y: e.clientY });
    }


    function handleDropDown(e) {
        e.preventDefault();
        e.stopPropagation();
        setVisible(false)
    }
    return (
        <div className="image" onClick={handleClick}>
            {
                (visible && <div style={{ transform: `translateX(${position.x}px) translateY(${position.y}px)`, color: 'black' }}>
                    <form method='POST' className='dropdown_form'>
                        <button onClick={(e) => {
                            handleDropDown(e)
                        }}>Bob</button>
                        <button onClick={(e) => {
                            handleDropDown(e)
                        }}>Rob</button>
                        <button onClick={(e) => {
                            handleDropDown(e)
                        }}>Lob</button>
                    </form>
                </div>)
            }
        </div>
    )
}




export default App