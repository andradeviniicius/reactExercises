import { useState } from "react";

function Exercicio5() {
  const animals = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  
  const animalList = animals.map((a) =>
  <li>{a}</li>
);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
          width: "100%",
          height: "100%",
        }}
      >

		<ul>
			{animalList}
		</ul>

	  </div>
    </>
  );
}

export default Exercicio5;
