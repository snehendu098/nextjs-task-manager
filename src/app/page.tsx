"use client"
import React from 'react'
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
  const [filter, setFilter] = useState(3)
  const [filteredData, setFilteredData] = useState([])

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

  const filterData:any = () => {
    setFilteredData(data.filter((e:any) => {
      if (filter !== 3) {

     return e.status == filter
      } else {
        return e
      }
    }))
  }



  useEffect(() => {
    fetchData()
  }, [data])

  useEffect(() => {
    filterData()
  }, [filter, data])


  return (
    <main className="flex p-10 max-w-screen min-h-screen flex-col items-center">
      <div className="absolute top-10 left-10" >
        <TaskCreate/>
      </div>
      <div className="mt-20">
        <FilterMenu filterTodo={() => setFilter(0)} filterInProg={() => setFilter(1)} filterAll={() => setFilter(3)} filterDone={() => setFilter(2)} />
      </div>
      <div className="w-full flex justify-center flex-wrap mt-10" >
        {filteredData.length > 0 ? filteredData.map((e:any) => <React.Fragment key={e._id} ><CustomCard id={e._id} status={e.status} title={e.title} desc = {e.description} date = {format(e.deadLine, "PPP")} /> </React.Fragment>) : <p>No Tasks Found</p>}
        
      </div>
    </main>
  );
}


