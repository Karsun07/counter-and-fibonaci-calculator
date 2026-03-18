import React, { useState } from "react";
import ReactDOM from "react-dom/client"

function App(){
    const [count,setCount]=useState(0);
    const [finnum,setFib]=useState();
    return (
        <div className="parent">
            <div>
                <h1>{count}</h1>
                <button onClick={()=>setCount(count+1)}>Increase</button>
                <button onClick={()=>setCount(count-1)}>Decrease</button>
            </div>
            

        </div>
    )

}
const reactRoot=ReactDOM.createRoot(document.getElementById('root'));
reactRoot.render(<App/>);