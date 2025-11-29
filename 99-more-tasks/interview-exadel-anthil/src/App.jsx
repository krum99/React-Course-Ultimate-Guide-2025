import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import AddButton from './components/AddButton';
import DataVisualizer from './components/DataVisualizer';

function App() {
  const [data, setData] = useState([]);

  function addHandler(new_data) {
    setData((prev) => [
      { data: new_data, checked: false, id: uuidv4() },
      ...prev,
    ]);
  }
  console.log(data);

  return (
    <>
      <AddButton onCLickHandler={addHandler} />
      <DataVisualizer data={data} />
    </>
  );
}

export default App;
