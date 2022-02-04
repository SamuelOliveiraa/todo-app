import { useEffect, useState } from "react";
import { Item } from "../../Types/Item";
import Delete from "../../images/icon-cross.svg";
import {
  ContainerList,
  CustomCheckmark,
  InputContainer,
  ListItem,
  Infos,
  Flex,
  InfosMobile,
} from "./style";

type Props = {
  addList: (text: string) => void;
  updateCheck: (id: number) => void;
  removeList: (id: number) => void;
  handleFilter: (filterString: string) => void;
  clearCompleted: () => void;
  list: Item[];
  filter: string;
};

const ListContainer = ({
  updateCheck,
  addList,
  removeList,
  list,
  filter,
  handleFilter,
  clearCompleted,
}: Props) => {
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    let a = 0;

    for (let item of list) {
      if (item.check === true) {
        a += 1;
      }
    }
    setRemaining(list.length - a);
  }, [list]);

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    addList(target.value);
    target.value = "";
  };

  return (
    <>
      <InputContainer>
        <CustomCheckmark>
          <input type="checkbox" name="" />
          <span></span>
        </CustomCheckmark>

        <input
          type="text"
          name=""
          placeholder="Create a todo..."
          onKeyDown={(e) => e.code === "Enter" && handleKey(e)}
        />
      </InputContainer>

      <ContainerList>
        {list !== undefined &&
          list.map((item, index) => (
            <ListItem key={index} checked={item.check}>
              <CustomCheckmark checked={item.check}>
                <input type="checkbox" />

                <span onClick={() => updateCheck(item.id)}></span>
              </CustomCheckmark>
              <h2>{item.text}</h2>
              <img
                src={Delete}
                alt="Delete Icon"
                onClick={() => removeList(item.id)}
              />
            </ListItem>
          ))}
        <Infos>
          <span>{remaining} items left</span>
          <Flex filter={filter}>
            <span onClick={() => handleFilter("1")}>All</span>
            <span onClick={() => handleFilter("2")}>Active</span>
            <span onClick={() => handleFilter("3")}>Completed</span>
          </Flex>
          <span onClick={clearCompleted}>Clear Completed</span>
        </Infos>
      </ContainerList>

      <InfosMobile>
        <span>All</span>
        <span>Active</span>
        <span>Completed</span>
      </InfosMobile>
    </>
  );
};

export default ListContainer;
