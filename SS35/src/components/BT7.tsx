import React, { useState } from 'react'

export default function BT7() {
    const [textNumber,setTextNumber]=useState(0);
    function changeText(e:React.ChangeEvent<HTMLTextAreaElement>) {
        setTextNumber(e.target.textLength)
    }
  return (
    <div>
        <h1>Bài 7</h1>
        <textarea name="Ex7" id="" onChange={changeText}></textarea>
        <p>Số ký tự {textNumber}</p>
    </div>
  )
}
