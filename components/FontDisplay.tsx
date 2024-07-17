import { cn } from "@/lib/utils";
import React from "react";

const FontDisplay = ({
  testText,
  fontType,
  title,
}: {
  testText: string;
  fontType: string;
  title: string;
}) => {
  return (
    <div className="mt-2 mr-2 ml-2 mb-10">
      <h1 className="text-2xl mb-4">{title}{" Font"}</h1>
      <p className={cn(fontType, "min-h-fit text-6xl")}>{testText}</p>
    </div>
  );
};

export default FontDisplay;
