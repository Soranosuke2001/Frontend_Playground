import React from "react";

const FontDisplayWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[80%] border border-solid border-black rounded-lg">
      {children}
    </div>
  );
};

export default FontDisplayWrapper;
