import React from "react";
import { Users, Bitcoin, CircleDollarSignIcon } from "lucide-react";
import { tagsColor, dataForCounter } from "@/app/utils";
import Counter from "./Counter";

const BetCard = ({
  id,
  tag,
  topic,
}: {
  id: number;
  tag: string;
  topic: string;
}) => {
  return (
    <div className=" cursor-pointer col-span-4 border-2 hover:border-indigo-500 transition-all rounded-md relative p-2  flex flex-col gap-3">
      <div className="flex flex-col  items-start">
        <h2 className=" text-2xl font-bold text-indigo-700  ">{topic}</h2>
        <p
          className={` text-xs ${tagsColor[tag].color} text-white px-2 rounded-full`}
        >
          {tag}
        </p>
      </div>
      <div className="flex items-center">
        <div className="flex-1 ">
          <p>Gamblers</p>
          <div className="flex w-fit bg-slate-200  gap-2 p-1 rounded-full ">
            <Users size={20} className="" />
            <Counter initialUsers={dataForCounter[id].users} />
          </div>
        </div>
        <div>
          <p>Accepted coins</p>
          <div className="flex gap-2">
            <Bitcoin className=" bg-yellow-500 rounded-full" />
            <CircleDollarSignIcon className="bg-emerald-500 rounded-full text-white" />
          </div>
        </div>
      </div>
      <button className="absolute right-0 top-[10px] bg-gradient-to-r from-blue-600  to-indigo-400 text-sm  rounded-full py-1 px-2 mr-2 text-white">
        Bet Now!
      </button>
      <div className="w-full h-full bg-red absolute"></div>
    </div>
  );
};

export default BetCard;
