import { v4 as uuidv4 } from 'uuid';

export default function DataVisualizer({ data }) {
  return (
    <ul>
      {data.map((value) => (
        <li key={uuidv4()}>{value}</li>
      ))}
    </ul>
  );
}
