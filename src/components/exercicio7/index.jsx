import { useState } from "react";
import HelloForm from "./HelloForm";

function Exercicio7() {
  return (
    <>
      <h1 className="title">Exercicio7</h1>
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
        <HelloForm></HelloForm>
      </div>
    </>
  );
}

export default Exercicio7;
