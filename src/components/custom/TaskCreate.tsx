"use client"

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React, {useState} from "react"
import { Textarea } from "../ui/textarea"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "../ui/use-toast"
import axios from "axios"
 
export function TaskCreate() {
  const [task, setTask] = useState({title: "", description: ""})
  const [date, setDate] = useState<Date>()
  const [option, setOption] = useState("")

  const submitHandler = async (e:any) => {
    try {
      console.log("click")
      const {title, description} = task

      const body = {title, description, status:  Number(option), deadLine: date}
      const {data} = await axios.post("/api/tasks", body)
      if (data.success === true) {
        return toast({title: data.message, description: "It might take some time for the changes to reflect in your screen"})
      } else {
        console.log(data)
      }

    } catch (err: any) {
      console.log(err)
      return toast({variant: "destructive", title: "Error Occurred"})
    } 
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create A Task</DialogTitle>
          <DialogDescription>
            Conquer your to-do list, one task a time
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              placeholder="Create the login page"
              className="col-span-3"
              onChange={e => setTask({...task, title: e.target.value})}
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="username" className="text-left mb-4 ">
              Description
            </Label>
            <Textarea placeholder="Enter task Description" onChange={e => setTask({...task, description: e.target.value})} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4" >
            <Label htmlFor="deadline" className="text-right">Deadline</Label>
            <div className="col=col-span-3" >
            <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
    </div>
          </div>
          <div className="w-full" >
            <Select onValueChange={e => setOption(e)} >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Status</SelectLabel>
          <SelectItem value="0">To Do</SelectItem>
          <SelectItem value="1">In Progress</SelectItem>
          <SelectItem value="2">Done</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
          </div>
        </div>
        <DialogFooter>
        <DialogClose asChild >
          <Button type="button" onClick={(e) => submitHandler(e)} >Save changes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
