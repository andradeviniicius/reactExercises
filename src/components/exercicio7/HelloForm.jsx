import { useState } from "react";

export default function HelloForm(props) {
  const [name, setName] = useState({ value: "" });
  const [surname, setSurname] = useState({ value: "" });

  const handleChangeName = (event) => {
    setName({ value: event.target.value });
  };
  const handleChangeSurname = (event) => {
    setSurname({ value: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("A name was submitted: " + name.value +" "+ surname.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChangeName} value={name.value} />
        <input type="text" value={surname.value} onChange={handleChangeSurname} />
        <button type="submit">Greet me</button>
      </form>
    </>
  );
}
