export default function AnimalList(props) {
  const arr = props.list;
  const animalList = arr.map((a,index) => <li key={index}>{a}</li>);
  console.log(animalList);
  return (
    <>
      <ul>{animalList}</ul>
    </>
  );
}
