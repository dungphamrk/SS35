import React,{useState} from "react";
export default function BT5() {
  const [inputInfo,setInput]=useState("");
    const changeInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setInput(e.target.value);
    }
  return (
    <div>
      <br />
      <h1>Bài 5</h1>
      <label htmlFor="Ex5">Dữ liệu người dùng nhập: {inputInfo}</label>
      <span></span>
      <br />
      <input type="text" className="Ex5" onChange={changeInput} />
    </div>
  );
}
