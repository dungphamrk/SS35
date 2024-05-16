import React, { useState } from 'react'

export default function BT3() {
    const [textColor,setTextColor]=useState("black");
    function handleChangeColor(){
        setTextColor(textColor==='black'?'red':'black');
        console.log(textColor);
        
    }
  return (
    <div>
        <h1>Bài 3</h1>
        <p style={{color:textColor}}>Tiêu đề văn bản</p>
        <button onClick={handleChangeColor}>Thay đổi mảu</button>
    </div>
  )
}
