import React, { ChangeEvent, useState } from "react";

export default function BT10() {
  const [hobbies, setHobbies] = useState([""]);
  function handlePick(e: ChangeEvent<HTMLInputElement>, element: string) {
    let newHobbies = [...hobbies];
    if (hobbies.includes(element)) {
      newHobbies.splice(hobbies.indexOf(element), 1);
      setHobbies(newHobbies);
    } else {
      setHobbies([...newHobbies, element]);
    }
  }
  return (
    <div>
      <h1>BT10</h1>
      <p>Sở thích [{hobbies.join(',')}]</p>
      <input
        type="checkbox"
        name="play"
        onChange={(event) => {
          handlePick(event, "Đi chơi");
        }}
      />{" "}
      Đi chơi
      <br />
      <input
        type="checkbox"
        name="code"
        onChange={(event) => {
          handlePick(event, "Code");
        }}
      />{" "}
      Code
      <br />
      <input
        type="checkbox"
        name="swim"
        onChange={(event) => {
          handlePick(event, "Bơi lội");
        }}
      />{" "}
      Bơi lội
      <br />
      <input
        type="checkbox"
        name="skipping"
        onChange={(event) => {
          handlePick(event, "Nhảy dây");
        }}
      />{" "}
      nhảy dây
    </div>
  );
}
