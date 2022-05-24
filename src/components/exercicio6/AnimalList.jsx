export default function AnimalList(props) {
    const arr = props.list
  const animalList = arr.map((a) => <li>{a}</li>);
  return <ul>{animalList}</ul>;
}
