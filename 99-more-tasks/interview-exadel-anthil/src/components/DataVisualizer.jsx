// import { v4 as uuidv4 } from 'uuid';

export default function DataVisualizer({ data }) {
  // function handleCheck(){

  // }

  return (
    <ul>
      {data.map((obj) => (
        <li key={obj.id} style={{ border: '1px solid black' }}>
          <input type="checkbox" id={obj.id} checked={obj.checked} />
          {obj.data}
        </li>
      ))}
    </ul>
  );
}
