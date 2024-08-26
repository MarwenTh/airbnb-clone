"use client";
import React from "react";
import { HashLoader } from "react-spinners";

type Props = {};

const Loader = (props: Props) => {
  return (
    <div className=" h-[70vh] flex flex-col justify-center items-center">
      <HashLoader speedMultiplier={1.5} color="green" />
    </div>
  );
};

export default Loader;
