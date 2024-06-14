import React from "react";
import { replaceUnderscoresWithSpaces } from "../utils";
import { archivo } from "@/fonts";

const page = ({ params }: { params: { title: string } }) => {
  return (
    <div className="w-full h-screen flex flex-col  justify-center">
      <div className={`${archivo.className} text-center font-bold text-5xl`}>
        {replaceUnderscoresWithSpaces(params.title)}
      </div>
    </div>
  );
};

export default page;
