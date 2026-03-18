import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
    const [count, setCount] = useState(0);
    const [numb, setNumber] = useState("");

    const fibSeries = useMemo(() => {
        const n = Number(numb);

        if (!n || n <= 0) return [];
        if (n === 1) return [0];

        let series = [0, 1];

        for (let i = 2; i < n; i++) {
            series.push(series[i - 1] + series[i - 2]);
        }

        return series;
    }, [numb]);
    // useMemo(callbackfn,[dependncy])

    return (
        <div className="parent">
            <div id="counter">
                <h1>Count is : {count}</h1>
                <button onClick={() => setCount(count + 1)}>Increase</button>
                <button onClick={() => setCount(count - 1)}>Decrease</button>
            </div>

            <div id="fibo">
                <h1>Fibonacci Calculator</h1>

                <input
                    placeholder="enter number"
                    type="number"
                    value={numb}
                    onChange={(e) => setNumber(e.target.value)}
                />

                <div>
                    {fibSeries.map((num, index) => (
                        <span key={index} style={{ marginRight: "10px" }}>
                            {num}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App />);