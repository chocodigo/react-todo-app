import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState, Categories, categoryList } from "../atoms";

interface ICategoryForm {
  category: string;
}

function CreateCategory() {
  const { handleSubmit, register, setValue } = useForm<ICategoryForm>();

  const setCaegoryList = useSetRecoilState(categoryList);
  const handleValid = ({ category }: ICategoryForm) => {
    setCaegoryList((oldCategory) => {
      return { ...oldCategory, category };
    });
    setValue("category", "");
    console.log(Categories);
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("category", {
          required: "Please write a category",
        })}
        placeholder={"Write a category"}
      />
      <button>Add</button>
    </form>
  );
}

export default CreateCategory;
