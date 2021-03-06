export default function AnimalList(props) {
  const arr = props.list;
  const animalList = arr.map((a) => {

    switch (a) {
      case 'dog':
        return <li>🐶 {a}</li>
        break;
      case 'cat':
        return <li>🐱 {a}</li>
        break;
      case 'chicken':
        return <li>🐔 {a}</li>
        break;
      case 'horse':
        return <li>🐴 {a}</li>
        break;
      case 'cow':
        return <li>🐮 {a}</li>
        break;
      case 'sheep':
        return <li>🐑 {a}</li>
        break;
    
      default:
        return a
        break;
    }
  });
  console.log(animalList);
  return (
    <>
      <ul style={{listStyleType: "none"}}>{animalList}</ul>
    </>
  );
}
