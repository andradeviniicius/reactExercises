import "./style.css";

export default function Card(props) {
  return (
    <>
      <div key={props.key} class="container">
        <div class="card">
          <div class="imgBx"></div>
          <div class="contentBx">
            <h2>{props.title}</h2>
            <p>{props.punchline}</p>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
