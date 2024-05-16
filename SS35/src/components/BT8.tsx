import React,{useState} from "react";
export default function BT8() {
  const [inputInfo,setInput]=useState("");
    const changeInput=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        setInput(e.target.value);
    }
  return (
    <div>
      <br />
      <h1>Bài 8</h1>
      <label htmlFor="Ex4">Tỉnh / Thành phố: {inputInfo}</label>
      <span></span>
      <br />
      <select name="Ex4" onChange={changeInput}>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Quảng Ninh">Quảng Ninh</option>
        <option value="Hải Phòng">Hải Phòng</option>
      </select>
    </div>
  );
}
