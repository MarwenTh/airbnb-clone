"use client";
import React, { FC, useEffect } from "react";
import EmptyState from "./components/EmptyState";

type Props = {
  error: Error;
};

const Error: FC<Props> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <EmptyState
      title="Error"
      subtitle={
        "An error occurred while loading the page. Please try refreshing the page."
      }
    />
  );
};

export default Error;
