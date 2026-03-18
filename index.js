import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
    const [count, setCount] = useState(0);
    const [numb, setNumber] = useState("");
    const [result, setResult] = useState("");

    function fib(n) {
        if (n <= 1) {
            setResult(n);
            return;
        }

        let first = 0, second = 1, third;
        for (let i = 2; i <= n; i++) {
            third = first + second;
            first = second;
            second = third;
        }

        setResult(second);
    }

    return (
        <div className="parent">
            <div id="counter">
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)}>Increase</button>
                <button onClick={() => setCount(count - 1)}>Decrease</button>
            </div>

            <div id="fibo">
                <input placeholder="enter number" type="number" value={numb} onChange={(e) => setNumber(e.target.value)}/>
                <button onClick={() => fib(Number(numb))}>Get Answer</button>

                <h2>Result: {result}</h2>
            </div>
        </div>
    );
}

const reactRoot = ReactDOM.createRoot(document.getElementById('root'));
reactRoot.render(<App />);