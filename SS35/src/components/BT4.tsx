import React, { useState } from 'react'

export default function BT4() {
    const [textColor,setTextColor]=useState("black");
    function handleChangeColor(){
        setTextColor(textColor==='black'?'white':'black');
        console.log(textColor);
        
    }
  return (
    <div>
        <h1>Bài 4</h1>
        <p style={{color:textColor}}>Tiêu đề văn bản</p>
        <button onClick={handleChangeColor}>{textColor==='black'?'Ẩn':'Hiện'}</button>
    </div>
  )
}
