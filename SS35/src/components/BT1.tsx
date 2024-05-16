import { useState } from "react"
import React from 'react'

export default function BT1() {
    const [name]=useState("Dung");
    
  return (
    <div>
        <h1>Bài 1</h1>
        <p>Họ và tên :{name}</p>
    </div>
  )
}
