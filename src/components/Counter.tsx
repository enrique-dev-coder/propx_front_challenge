"use client";
import React, { useState, useEffect } from "react";

const Counter = ({ initialUsers }: { initialUsers: number }) => {
  const [users, setUsers] = useState(initialUsers);

  useEffect(() => {
    const interval = setInterval(() => {
      setUsers((prevUsers) => prevUsers + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{users}</h1>
    </div>
  );
};

export default Counter;
