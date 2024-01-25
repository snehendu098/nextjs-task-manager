"use client"
import {
  Menubar,
  MenubarTrigger,
  MenubarMenu
} from "@/components/ui/menubar"
 

export default function TopMenu({filterTodo, filterInProg, filterAll, filterDone}:any) {
  return (
    
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger onClick={filterAll} >
          All
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu >
        <MenubarTrigger onClick={filterTodo} >Todo</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu >
        <MenubarTrigger onClick={filterInProg} >In Progress</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger onClick={filterDone} >Completed</MenubarTrigger>
      </MenubarMenu>


    </Menubar>
  )
}

