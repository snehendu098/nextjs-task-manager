"use client"

import CustomCard from "@/components/custom/CustomCard";
import FilterMenu from "@/components/custom/FilterMenu";
import { TaskCreate } from "@/components/custom/TaskCreate";
import TopMenu from "@/components/custom/TopMenu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import axios from "axios";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { format } from "date-fns";

export default function Home() {
  const [data, setData] = useState([])

  const fetchData = async () => {
    try {
      const res = await axios.get("/api/tasks")
      if (res.data.success) {
        setData(res.data.tasks)
      } else {
        console.log(data)
      }

    } catch (err) {
      return toast({title: "Error occurred"})
    }
  }

  useEffect(() => {
    fetchData()
  }, [data])


  return (
    <main className="flex p-10 max-w-screen min-h-screen flex-col items-center">
      <div className="absolute top-10 left-10" >
        <TaskCreate/>
      </div>
      <div className="mt-20">
        <FilterMenu/>
      </div>
      <div className="w-full flex justify-center flex-wrap mt-10" >
        {data.length > 0 ? data.map((e:any) => <CustomCard id={e._id} status={e.status} title={e.title} desc = {e.description} date = {format(e.deadLine, "PPP")} />) : <p>No Tasks Found</p>}
      </div>
    </main>
  );
}


