import { useState } from "react";
import AnimalList from './AnimalList'

function Exercicio6() {

  function arrayConstructor(item,index){
    this.name = item
    this.key = index
  }

  const animals = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  const newAnimals = animals.map((elem,)=>{
    
  })
  return (
    <>
	<h1 className="title">Exercicio 6</h1>
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
		  <AnimalList list={animals}></AnimalList>

	  </div>
    </>
  );
}

export default Exercicio6;
