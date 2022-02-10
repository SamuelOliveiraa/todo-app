import { Container } from "./style";
import Header from "../Header";
import ListContainer from "../ListContainer";
import { Item } from "../../Types/Item";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";

type Props = {
  filter: string;
  handleFilter: (filterString: string) => void;
  clearCompleted: () => void;
};

const AppContainer = ({
  handleFilter,
  filter,
  clearCompleted,
}: Props) => {
  return (
    <Container>
      <Header/>

      <ListContainer
        filter={filter}
        handleFilter={handleFilter}
        clearCompleted={clearCompleted}
      />
    </Container>
  );
};

export default AppContainer;
