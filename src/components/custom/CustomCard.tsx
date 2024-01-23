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
  return (
    <div className="lg:w-[calc(27%)] md:w-[calc(45%)] w-[calc(80%)] p-6" >
  <Card className="w-full">
  <CardHeader>
    <CardTitle>{props.title || "Card Title"}</CardTitle>
    <CardDescription className="text-blue-400 font-semibold" >{props.status || "To-Do"}</CardDescription>
    <div className="flex text-muted-foreground" ><Calendar/>
            <p className="ml-2" >{props.date || "16-03-2024"}</p></div>
  </CardHeader>
  <CardContent>
    <p>{props.desc || ""}</p>
  </CardContent>
  <CardFooter>
    <Button onClick={props.btnClick} >{props.btnText || "Mark as Completed"}</Button>
  </CardFooter>
</Card>
</div>
  )
}

export default CustomCard
