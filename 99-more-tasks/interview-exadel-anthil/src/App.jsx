import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import AddButton from './components/AddButton';
import DataVisualizer from './components/DataVisualizer';

function App() {
  const [data, setData] = useState([]);

  function onClickLi(itemId) {
    setData((prevData) => {
      const updatedData = prevData.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      );

      return updatedData.sort((a, b) => {
        if (a.checked && !b.checked) return 1;
        if (!a.checked && b.checked) return -1;
        return 0;
      });
    });
  }

  function addHandler(new_data) {
    setData((prev) => [
      { data: new_data, checked: false, id: uuidv4() },
      ...prev,
    ]);
  }

  return (
    <>
      <AddButton onCLickHandler={addHandler} />
      <DataVisualizer data={data} onClickLi={onClickLi} />
    </>
  );
}

export default App;
