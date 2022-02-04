import { Container } from "./style";
import Header from "../Header";
import ListContainer from "../ListContainer";
import { Item } from "../../Types/Item";

type Props = {
  list: Item[];
  theme: boolean;
  filter: string;
  handleTheme: () => void;
  addList: (text: string) => void;
  updateCheck: (id: number) => void;
  removeList: (id: number) => void;
  handleFilter: (filterString: string) => void;
  clearCompleted: () => void;
};

const AppContainer = ({
  updateCheck,
  addList,
  removeList,
  theme,
  handleTheme,
  list,
  handleFilter,
  filter,
  clearCompleted
}: Props) => {
  return (
    <Container>
      <Header theme={theme} handleTheme={handleTheme} />

      <ListContainer
        addList={addList}
        removeList={removeList}
        updateCheck={updateCheck}
        list={list}
        filter={filter}
        handleFilter={handleFilter}
        clearCompleted={clearCompleted}
      />
    </Container>
  );
};

export default AppContainer;
