import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import "./Input.css";
function Input({ setListItems, listItems }) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const dataObj = {
      id: Math.random(),
      task: data.example,
    };
    setListItems((item) => [...item, dataObj]);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="todo__input">
        <input
          type="text"
          placeholder="Enter your task here"
          {...register("example", { required: true })}
        />
        <Button variant="contained" type="submit">
          Add
        </Button>
      </div>
    </form>
  );
}

export default Input;
