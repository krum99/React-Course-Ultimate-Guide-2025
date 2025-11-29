export default function DataVisualizer({ data, onClickLi }) {
  return (
    <ul>
      {data.map((obj) => (
        <li
          key={obj.id}
          style={{
            border: '1px solid black',
            padding: '10px',
            margin: '5px 0',
            cursor: 'pointer',
          }}
          onClick={() => onClickLi(obj.id)}
        >
          <input
            type="checkbox"
            checked={obj.checked || false}
            readOnly
            style={{ marginRight: '10px' }}
          />
          {obj.data}
        </li>
      ))}
    </ul>
  );
}
