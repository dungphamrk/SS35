import React, { useState, MouseEvent } from 'react';

export default function BT9() {
  const [genderChoice, setGenderChoice] = useState<string>("");

  function handleSubmitGender(e: MouseEvent<HTMLInputElement>) {
    setGenderChoice(e.currentTarget.value);
  }

  return (
    <div>
      <p>Gender: {genderChoice}</p>
      <form action="">
        <input 
          onClick={handleSubmitGender} 
          type="radio" 
          className="gender" 
          name="gender" 
          value="Nam" 
        />
        <label htmlFor="male">Nam</label>
        <br />
        <input 
          onClick={handleSubmitGender} 
          type="radio" 
          className="gender" 
          name="gender" 
          value="Nữ" 
        />
        <label htmlFor="female">Nữ</label>
        <br />
        <input 
          onClick={handleSubmitGender} 
          type="radio" 
          className="gender" 
          name="gender" 
          value="Khác" 
        />
        <label htmlFor="diff">Khác</label>
      </form>
    </div>
  );
}
