import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import {
  ADD_LIST,
  REMOVE_LIST,
  UPDATE_CHECK,
  UPDATE_LIST,
} from "../../Store/List/actions";

const ListContainer = () => {
  const list = useSelector((state: RootState) => state.list.list);
  const [remaining, setRemaining] = useState(0);
  const [listUpdate, setListUpdate] = useState(list);
  const [filter, setFilter] = useState(list);

  const dispatch = useDispatch();

  useEffect(() => {
    let a = 0;

    for (let item of list) {
      if (item.check === true) {
        a += 1;
      }
    }
    setRemaining(list.length - a);
  }, [list]);

  useEffect(() => {
    setListUpdate(list)
  }, [list.length]);

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    dispatch(ADD_LIST(target.value));
    target.value = "";
  };

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const newList: Item[] = Array.from(filter === "1" ? list : listUpdate);
    const [reorderedItem] = newList.splice(result.source.index, 1);
    const dest = result.destination as DraggableLocation;
    newList.splice(dest.index, 0, reorderedItem);

    filter !== "1"
      ? setListUpdate(newList)
      : dispatch(UPDATE_LIST({ list: newList }));
  };

  const handleFilter = (filterString: string) => {
    setFilter(filterString);
    let listNew = [];

    if (filterString === "3") {
      for (let item of list) {
        if (item.check === true) {
          listNew.push(item);
        }
      }
      setListUpdate(listNew);
    } else if (filterString === "2") {
      for (let item of list) {
        if (item.check === false) {
          listNew.push(item);
        }
      }
      setListUpdate(listNew);
    } else if (filterString === "1") {
      setListUpdate(list);
    }
  };

  const clearCompleted = () => {
    const newListFiltered = listUpdate.filter(
      (item: Item) => item.check !== true
    );
    if (filter === "3") {
      setListUpdate(newListFiltered);
    } else {
      setListUpdate(newListFiltered);
      dispatch(UPDATE_LIST({ list: newListFiltered }));
    }
  };

  const handleCheckUpdate = (id: number) => {
    dispatch(UPDATE_CHECK(id));
    handleFilter(filter);
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
                listUpdate.map((item: Item, index: number) => (
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
                            onClick={() => handleCheckUpdate(item.id)}
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
