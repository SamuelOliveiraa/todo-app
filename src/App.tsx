import GlobalStyleLight from "./Styles/theme-ligth";
import GlobalStyleDark from "./Styles/theme-dark";
import { useEffect, useState } from "react";
import AppContainer from "./Components/AppContainer";
import { Item } from "./Types/Item";

const App = () => {
  const [theme, setTheme] = useState(true);
  const [list, setList] = useState<Item[]>([]);
  const [filter, setFilter] = useState("1");

  useEffect(() => {
    if (localStorage.getItem("list") === null) {
      localStorage.setItem("list", JSON.stringify(list));
    } else {
      setList(JSON.parse(localStorage.getItem("list") || "[]"));
    }
  }, []);

  const handleTheme = () => {
    setTheme(!theme);
  };

  const addList = (text: string) => {
    let newList = JSON.parse(localStorage.getItem("list") || "[]");

    newList.push({
      id: Math.floor(Math.random() * 837829120187282),
      check: false,
      text,
    });

    localStorage.setItem("list", JSON.stringify(newList));
    handleFilter(filter);
  };

  const removeList = (id: number) => {
    let newList = JSON.parse(localStorage.getItem("list") || "[]");

    newList.map((item: Item, index: number) => {
      if (item.id === id) {
        newList.splice(index, 1);
      }
    });
    localStorage.setItem("list", JSON.stringify(newList));
    handleFilter(filter);
  };

  const updateCheck = (id: number) => {
    let newList = JSON.parse(localStorage.getItem("list") || "[]");

    newList.map((item: Item, index: number) => {
      if (item.id === id) {
        newList[index].check = !newList[index].check;
      }
    });
    localStorage.setItem("list", JSON.stringify(newList));
    handleFilter(filter);
  };

  const clearCompleted = () => {
    let newList = JSON.parse(localStorage.getItem("list") || "[]");

    newList.map((item: Item, index: number) => {
      if (item.check === true) {
        newList.splice(index, 1);
      }
    });
    console.log(newList)
    localStorage.setItem("list", JSON.stringify(newList));
    handleFilter(filter);
  };

  const handleFilter = (filterString: string) => {
    setFilter(filterString);
    let newList = JSON.parse(localStorage.getItem("list") || "[]");
    let listNew = [];

    if (filterString === "3") {
      for (let item of newList) {
        if (item.check === true) {
          listNew.push(item);
        }
      }
      console.log(listNew);
      setList(listNew);
    } else if (filterString === "2") {
      for (let item of newList) {
        if (item.check === false) {
          listNew.push(item);
        }
      }
      console.log(listNew);
      setList(listNew);
    } else if (filterString === "1") {
      setList(JSON.parse(localStorage.getItem("list") || "[]"));
    }
  };

  return (
    <>
      {theme === true ? <GlobalStyleLight /> : <GlobalStyleDark />}

      <AppContainer
        list={list}
        addList={addList}
        removeList={removeList}
        updateCheck={updateCheck}
        theme={theme}
        handleTheme={handleTheme}
        handleFilter={handleFilter}
        filter={filter}
        clearCompleted={clearCompleted}
      />
    </>
  );
};

export default App;
