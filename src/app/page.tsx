import CustomCard from "@/components/custom/CustomCard";
import FilterMenu from "@/components/custom/FilterMenu";
import TopMenu from "@/components/custom/TopMenu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex p-10 w-screen min-h-screen flex-col items-center">
      <div className="absolute top-10 left-10" >
        <Button>Add Task</Button>
      </div>
      <div className="mt-20">
        <FilterMenu/>
      </div>
      <div className="w-full flex justify-center  flex-wrap mt-10" >
        <CustomCard/>
        <CustomCard/>
        <CustomCard/>
        <CustomCard/>
        <CustomCard/>
        <CustomCard/>


      </div>
    </main>
  );
}
