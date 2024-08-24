"use client";
import Image from "next/image";
import React, { FC } from "react";

type Props = {
  src: string | null | undefined;
};

const Avatar: FC<Props> = ({ src }) => {
  return (
    <Image
      alt="User Avatar"
      className="rounded-full"
      height={30}
      width={30}
      src={src || "/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
