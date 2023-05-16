import React from "react";
import CreateToDo from "./CreateToDo";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  Categories,
  categoryList,
  categoryState,
  toDoSelector,
  toDoState,
} from "../atoms";
import ToDo from "./ToDo";
import CreateCategory from "./CreateCategory";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const categoryListSelect = useRecoilValue(categoryList);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        {/*<option value={Categories.TO_DO}>To Do</option>*/}
        {/*<option value={Categories.DOING}>Doing</option>*/}
        {/*<option value={Categories.DONE}>Done</option>*/}
        {Object.values(categoryListSelect).map((item, index) => (
          <option key={`option_${index}`} value={item}>
            {item}
          </option>
        ))}
      </select>
      <CreateCategory />
      <CreateToDo />
      {toDos?.map((_toDo) => (
        <ToDo key={_toDo.id} {..._toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
