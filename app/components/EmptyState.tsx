"use client";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import Heading from "./Heading";
import Button from "./Button";

type Props = {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
};

const EmptyState: FC<Props> = ({
  title = "No data available",
  subtitle = "There is no data to display",
  showReset,
}) => {
  const router = useRouter();
  return (
    <div className=" h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading title={title} subtitle={subtitle} center />
      <div className=" w-48 mt-4">
        {showReset && (
          <Button
            outline
            label="Reset all filters"
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
