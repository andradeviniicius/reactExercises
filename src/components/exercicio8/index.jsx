import { useState } from "react";
import Joke from "./Joke";

function Exercicio8() {
  const jsonArr = [
    {
      id: 1,
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit",
    },
    {
      id: 2,
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#",
    },
  ];

  return (
    <>
      <h1 className="title">Exercicio8</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap:'10px',
          flexWrap:'wrap',
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Joke list={jsonArr}></Joke>
      </div>
    </>
  );
}

export default Exercicio8;
