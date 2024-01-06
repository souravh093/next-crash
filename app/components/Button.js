"use client"
import React from "react";

const Button = () => {
  return (
    <button
      className="p-2 bg-green-500 rounded-md hover:bg-green-600"
      onClick={() => alert("Clicked Here")}
    >
      Click Here
    </button>
  );
};

export default Button;
