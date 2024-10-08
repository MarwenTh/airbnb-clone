"use client";
import React, { FC, useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

type Props = {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
};

const Counter: FC<Props> = ({ title, subtitle, value, onChange }) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onchange, value]);

  const onReduce = useCallback(() => {
    if (value === 1) {
      return;
    }
    onChange(value - 1);
  }, [onchange, value]);
  return (
    <div className=" flex flex-row items-center justify-between">
      <div className=" flex flex-col">
        <div className=" font-medium">{title}</div>
        <div className=" font-light text-gray-600">{subtitle}</div>
      </div>
      <div className=" flex flex-row items-center gap-4">
        <div
          onClick={onReduce}
          className="w-10 h-10 rounded-full border-neutral-400 border-[1px] flex items-center justify-center text-neutral-600 cursor-pointer hover:opacity-80 transition"
        >
          <AiOutlineMinus />
        </div>
        <div className=" font-light text-xl text-neutral-600">{value}</div>
        <div
          onClick={onAdd}
          className="w-10 h-10 rounded-full border-neutral-400 border-[1px] flex items-center justify-center text-neutral-600 cursor-pointer hover:opacity-80 transition"
        >
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  );
};

export default Counter;
