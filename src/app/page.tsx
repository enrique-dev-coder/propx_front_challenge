import Image from "next/image";
import Layout from "@/components/wrappers/Layout";
import { archivo } from "@/fonts";
import { data } from "@/data";
import BetCard from "@/components/BetCard";

export default function Home() {
  return (
    <Layout>
      <h1
        className={`${archivo.className} text-center text-4xl mb-3
        bg-gradient-to-r from-blue-600  to-indigo-400 inline-block text-transparent bg-clip-text
        `}
      >
        Bet For Everything!
      </h1>
      <div className="grid grid-cols-12 gap-3">
        {data.map((card) => (
          <BetCard
            key={card.id}
            id={card.id}
            tag={card.tag}
            topic={card.topic}
            title={card.title}
          />
        ))}
      </div>
    </Layout>
  );
}
