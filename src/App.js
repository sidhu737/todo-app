import { useEffect, useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import Tasks from "./Components/Tasks";

function App() {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
  const [listItems, setListItems] = useState(initialState);
  const deleteItem = (id) => {
    // const newList = listItems;
    // const removeIndex = newList.findIndex((item) => item.id === id);
    // newList.splice(removeIndex, 1);
    // setListItems(()=);
    setListItems((current) =>
      current.filter((obj) => {
        return obj.id !== id;
      })
    );
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(listItems));
  }, [listItems]);
  return (
    <div className="App">
      <h1>A Todo App</h1>
      <Input setListItems={setListItems} listItems={listItems} />
      <Tasks items={listItems} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
