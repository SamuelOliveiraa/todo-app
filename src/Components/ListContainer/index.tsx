import { useEffect, useState } from "react";
import { Item } from "../../Types/Item";
import Delete from "../../images/icon-cross.svg";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DraggableLocation,
} from "react-beautiful-dnd";

import {
  ContainerList,
  CustomCheckmark,
  InputContainer,
  ListItem,
  Infos,
  Flex,
  InfosMobile,
  Drag,
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
  const [listUpdate, setListUpdate] = useState(list);

  useEffect(() => {
    let a = 0;

    for (let item of list) {
      if (item.check === true) {
        a += 1;
      }
    }
    setRemaining(list.length - a);
    setListUpdate(list);
  }, [list]);

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    addList(target.value);
    target.value = "";
  };

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const newList = Array.from(listUpdate);
    const [reorderedItem] = newList.splice(result.source.index, 1);
    const dest = result.destination as DraggableLocation;
    newList.splice(dest.index, 0, reorderedItem);

    setListUpdate(newList);
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

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <ContainerList {...provided.droppableProps} ref={provided.innerRef}>
              {listUpdate.length === 0 ? (
                <ListItem>Adicione uma tarefa</ListItem>
              ) : (
                listUpdate.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <ListItem
                        checked={item.check}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
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
                    )}
                  </Draggable>
                ))
              )}
              {provided.placeholder}
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
          )}
        </Droppable>
      </DragDropContext>

      <InfosMobile>
        <span>All</span>
        <span>Active</span>
        <span>Completed</span>
      </InfosMobile>

      <Drag>Drag and Drop to reorder list</Drag>
    </>
  );
};

export default ListContainer;
