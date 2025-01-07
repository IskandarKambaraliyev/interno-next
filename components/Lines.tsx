import React from "react";

const Lines = () => {
  return (
    <div className="fixed inset-0">
      <div className="container h-full flex justify-between">
        {Array.from({ length: 4 }).map((_, index) => (
          <Line key={index} />
        ))}
      </div>
    </div>
  );
};

export default Lines;

const Line = () => {
  return <div className="w-[1px] h-full bg-brown-light" />;
};
