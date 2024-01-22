"use client"
import {
  Menubar,
  MenubarTrigger,
  MenubarMenu
} from "@/components/ui/menubar"
 

export default function TopMenu() {
  return (
    
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          All
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Todo</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>In Progress</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Completed</MenubarTrigger>
      </MenubarMenu>


    </Menubar>
  )
}

