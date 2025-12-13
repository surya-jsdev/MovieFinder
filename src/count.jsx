import React, { useState } from 'react'
import './index.css'

function GetData() {
    const [Result, setResults] = useState([]);
    const [Error, setError] = useState(null);

    async function fetchData() {
        try {
            const res = await fetch(
                "https://68a582352a3deed2960dbd2c.mockapi.io/form/name"
            );
            const data = await res.json();
            setResults(data);
        } catch (err) {
            setError("Something went wrong");
        }
    }

    return (
        <>
            <button onClick={fetchData} style={{ background: "black", padding: "10px", color: "white" }}>Click</button>
            {Error && <p style={{ color: "red" }}>{Error}</p>}
            <div className='container'>
                {Result.map((item) => (
                    <div key={item.id}>
                        <img src={item.image} alt="Product-img" style={{width:"200px",height:"200px"}}/>
                        <h3>{item.name}</h3>
                        <p>{item.email}</p>
                    </div>
                ))}
            </div>


        </>

    )
}

export default GetData