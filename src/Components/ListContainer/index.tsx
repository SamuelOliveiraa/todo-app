import { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/store";

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
import { ADD_LIST, REMOVE_LIST, UPDATE_CHECK, UPDATE_LIST } from "../../Store/List/actions";

type Props = {
  handleFilter: (filterString: string) => void;
  clearCompleted: () => void;
  filter: string;
};

const ListContainer = ({ filter, handleFilter, clearCompleted }: Props) => {
  const [remaining, setRemaining] = useState(0);
  const list = useSelector((state: RootState) => state.list.list);
  const dispatch = useDispatch();

  /* useEffect(() => {
    dispatch()
  }, [list]); */

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    dispatch(ADD_LIST(target.value));
    target.value = "";
  };

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const newList: Item[] = Array.from(list);
    const [reorderedItem] = newList.splice(result.source.index, 1);
    const dest = result.destination as DraggableLocation;
    newList.splice(dest.index, 0, reorderedItem);

    dispatch(UPDATE_LIST({list: newList}));
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
              {list.length === 0 ? (
                <ListItem>Adicione uma tarefa</ListItem>
              ) : (
                list.map((item: Item, index: number) => (
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

                          <span
                            onClick={() => dispatch(UPDATE_CHECK(item.id))}
                          ></span>
                        </CustomCheckmark>
                        <h2>{item.text}</h2>
                        <img
                          src={Delete}
                          alt="Delete Icon"
                          onClick={() => dispatch(REMOVE_LIST(item.id))}
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
