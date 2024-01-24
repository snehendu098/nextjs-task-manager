"use client"

import React from "react"

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

const CustomCard = (props:any) => {

  let status = "To Do"
  let btnText = "Mark In Progress"

  if (props.status === 1){
    status = "In Progress"
    btnText = "Mark as Completed"
  } else if (props.status === 2) {
    status = "Completed"
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
    <Button onClick={props.btnClick} className="w-full" >{btnText}</Button> }
    <Button className="my-2 w-full" variant={"outline"} >Edit</Button>
    <Button className="w-full" variant={"outline"} >Delete</Button>
    </div>
  </CardFooter>
</Card>
</div>
  )
}

export default CustomCard
