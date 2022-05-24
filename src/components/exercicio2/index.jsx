function Exercicio2() {
  
	
	function clickHandler() {
    	alert("Clicked!");
  	}

  return (
    <>
      <h1 className="title">Exercicio2</h1>
      <div
        style={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          width: "100vh",
          height: "100vh",
        }}
      >
        <button onClick={clickHandler} >Click me</button>
      </div>
    </>
  );
}

export default Exercicio2;
