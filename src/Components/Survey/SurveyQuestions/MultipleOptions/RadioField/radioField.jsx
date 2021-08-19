import React from "react";
import { useState } from "react";
import "./radioField.scss";
export default function RadioField({ value, id, name, register, children }) {
  return (
    <>
      <div className="radio__item">
        <input
          className="radio"
          type="radio"
          name={name}
          id={id}
          value={value}
          {...register}
        />

        <div className="radio__check"></div>
        {children}
      </div>
    </>
  );
}
