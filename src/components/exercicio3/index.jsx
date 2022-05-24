import MainButton from "./MainButton";

function Exercicio3() {
  return (
    <>
      <h1 className="title">Exercicio3</h1>
      <div
        style={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <MainButton>Button 1</MainButton>
        <MainButton>Button 2</MainButton>
        <MainButton>Button 3</MainButton>
      </div>
    </>
  );
}

export default Exercicio3;
