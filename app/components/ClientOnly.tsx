"use client";
import React, { FC, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const ClientOnly: FC<Props> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  return <>{children}</>;
};

export default ClientOnly;
