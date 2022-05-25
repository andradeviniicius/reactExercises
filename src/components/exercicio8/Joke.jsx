import Card from "./Card";

export default function Joke(props) {
  const arrayReceived = props.list;
  const arrayTransformed = arrayReceived.map((el) => {
    return <Card key={el.id} title={el.setup} punchline={el.punchline}></Card>;
  });

  return (
    <>
        {arrayTransformed}
    </>
  );
}
