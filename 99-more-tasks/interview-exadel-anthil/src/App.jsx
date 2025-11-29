import { useState } from 'react';
import './App.css';
import AddButton from './components/AddButton';

function App() {
  const [data, setData] = useState([]);

  function addHandler(new_data) {
    setData((prev) => [new_data, ...prev]);
  }
  console.log(data);

  return (
    <>
      <AddButton onCLickHandler={addHandler} />
    </>
  );
}

export default App;
