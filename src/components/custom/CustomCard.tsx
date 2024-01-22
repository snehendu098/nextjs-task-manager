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

const CustomCard = (props:any) => {
  return (
    <div className="lg:w-[calc(27%)] md:w-[calc(45%)] w-[calc(80%)] p-6" >
  <Card className="w-full">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription className="text-blue-400 font-semibold" >Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Create a content management system that does the following tasks very smoothly</p>
  </CardContent>
  <CardFooter>
    <Button>Mark as completed</Button>
  </CardFooter>
</Card>
</div>
  )
}

export default CustomCard
