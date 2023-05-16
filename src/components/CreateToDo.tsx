import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";
interface IForm {
  toDo: string;
}

function CreateToDo() {
  const { handleSubmit, register, setValue } = useForm<IForm>();

  const [toDos, setToDos] = useRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, category, id: Date.now() },
      ...oldToDos,
    ]);
    setValue("toDo", "");
    localStorage.setItem(
      "ToDo",
      JSON.stringify([...toDos, { text: toDo, category, id: Date.now() }])
    );
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please write a To Do",
        })}
        placeholder={"Write a to do"}
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
