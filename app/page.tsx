"use client";

import { ChangeEvent, useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import FontDisplayWrapper from "@/components/FontDisplayWrapper";
import FontDisplay from "@/components/FontDisplay";
import { cervanttisFont, rolestFont, yujiSyukuFont } from "./fonts";

export default function Home() {
  const [testText, setTestText] = useState<string>("");

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTestText(e.target.value);
  };

  return (
    <main className="h-screen">
      <div className="w-full my-5">
        <div className="w-[80%] mx-auto border border-solid border-black rounded-lg p-2">
          <Label htmlFor="text-input">Type some text to test:</Label>
          <Input
            id="text-input"
            className="text-4xl"
            onChange={(e) => handleTextChange(e)}
          />
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-5">
        <FontDisplayWrapper>
          <FontDisplay
            testText={testText}
            fontType={rolestFont.className}
            title="Rolest"
          />
        </FontDisplayWrapper>

        <FontDisplayWrapper>
          <FontDisplay
            testText={testText}
            fontType={cervanttisFont.className}
            title="Cervanttis"
          />
        </FontDisplayWrapper>

        <FontDisplayWrapper>
          <FontDisplay
            testText={testText}
            fontType={yujiSyukuFont.className}
            title="Yuji Syuku"
          />
        </FontDisplayWrapper>
      </div>
    </main>
  );
}
