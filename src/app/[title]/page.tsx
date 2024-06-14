import React from "react";
import { replaceUnderscoresWithSpaces } from "../utils";
import { archivo } from "@/fonts";
import { data } from "@/data";

const page = ({ params }: { params: { title: string } }) => {
  const decodedTitle = replaceUnderscoresWithSpaces(
    decodeURIComponent(params.title)
  );

  const getDesc = data.filter((item) => item.title === decodedTitle);
  const pageDesc = getDesc[0].desc;
  return (
    <div className="w-full h-screen flex flex-col  justify-center">
      <div className={`${archivo.className} text-center font-bold text-2xl`}>
        {decodedTitle}
      </div>
      <p className="text-center">{pageDesc}</p>
    </div>
  );
};

export default page;
