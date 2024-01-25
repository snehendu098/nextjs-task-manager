"use client"

import React, { useState } from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import { Calendar } from "lucide-react"
import { toast } from "../ui/use-toast"
import axios from "axios"

const CustomCard = (props:any) => {

  const [loading, setLoading] = useState(false)

  let status = "To Do"
  let btnText = "Mark In Progress"

  if (props.status === 1){
    status = "In Progress"
    btnText = "Mark as Completed"
  } else if (props.status === 2) {
    status = "Completed"
  }

 const submitHandler = async () => {
    try {
      const res = await axios.put("/api/tasks", {id: props.id, fields: {status: props.status + 1}})

      const {data} = res
      if (data.success == true) {
        console.log(data)
        toast({title: "Updated Successfully"})
      } else {
        console.log(data.err)
        toast({title: "Error occurred"})
      }
    } catch (err:any) {
      console.log(err)
      toast({variant: "destructive", title: "Error Occurred"})
    }
  }

  const deleteHandler = async () => {
    try {
      const res = await axios.delete("/api/tasks", {data: {id: props.id}})
      toast({title: "Deleted"})

    } catch (err:any) {
      toast({variant: "destructive", title: "Error"})
    }
  }

  return (
    <div className="lg:w-[calc(27%)] md:w-[calc(45%)] w-[calc(80%)] p-6" >
    <Card className="w-full">
    <CardHeader>
      <CardTitle>{props.title || "Card Title"}</CardTitle>
      <CardDescription className={`${(props.status === 0 && "text-yellow-400") || (props.status==1 && "text-blue-500") || (props.status == 2 && "text-green-500")}  font-semibold`} >{status}</CardDescription>
    <div className="flex text-muted-foreground" ><Calendar/>
            <p className="ml-2" >{props.date || "16-03-2024"}</p></div>
  </CardHeader>
  <CardContent>
    <p>{props.desc || ""}</p>
  </CardContent>
  <CardFooter>
          <div className="flex flex-col w-full" >
            {props.status !== 2 && 
    (!loading ? <Button onClick={submitHandler} className="w-full" >{btnText}</Button> : <Button disabled ></Button>) }
    <Button onClick={deleteHandler} className="w-full mt-2" variant={"outline"} >Delete</Button>
    </div>
  </CardFooter>
</Card>
</div>
  )
}

export default CustomCard
