import React from 'react'
import { useState, useEffect } from 'react'
function count() {
    const list = [{ id: 1, name: "Surya", age: 22, proffesion: "Developer" }, 
        { id: 2, name: "Vijay", age: 25, proffesion: "MERN Stack Developer" }];

    return (
        <>
            {list.map(item =>(<p key={item.id}>Name: {item.name}</p>))}
        </>
    )
}

export default count
