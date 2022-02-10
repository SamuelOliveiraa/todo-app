import { Container } from "./style";
import Header from "../Header";
import ListContainer from "../ListContainer";
import { Item } from "../../Types/Item";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";

type Props = {
  filter: string;
  updateCheck: (id: number) => void;
  removeList: (id: number) => void;
  handleFilter: (filterString: string) => void;
  clearCompleted: () => void;
};

const AppContainer = ({
  updateCheck,
  addList,
  removeList,
  handleFilter,
  filter,
  clearCompleted,
}: Props) => {
  return (
    <Container>
      <Header/>

      <ListContainer
        removeList={removeList}
        updateCheck={updateCheck}
        filter={filter}
        handleFilter={handleFilter}
        clearCompleted={clearCompleted}
      />
    </Container>
  );
};

export default AppContainer;
