import CustomCard from "@/components/custom/CustomCard";
import FilterMenu from "@/components/custom/FilterMenu";
import { TaskCreate } from "@/components/custom/TaskCreate";
import TopMenu from "@/components/custom/TopMenu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import axios from "axios";
import { Plus } from "lucide-react";
import Image from "next/image";

export default function Home() {

  return (
    <main className="flex p-10 w-screen min-h-screen flex-col items-center">
      <div className="absolute top-10 left-10" >
        <TaskCreate/>
      </div>
      <div className="mt-20">
        <FilterMenu/>
      </div>
      <div className="w-full flex justify-center  flex-wrap mt-10" >
        <CustomCard/>
      </div>
    </main>
  );
}

/*
export const getStaticProps = async () => {
  const data = await axios.get("")
}*/
