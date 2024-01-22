"use client"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Moon, Sun } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePathname } from "next/navigation"

export default function TopMenu() {
  const {setTheme}  = useTheme()
  const pathName = usePathname()
  return (
  <>
    {pathName !== "/auth" ? 
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <Link href={"/profile"} >
          Profile
          </Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Log Out</MenubarTrigger>
      </MenubarMenu>
    </Menubar> : <></>}</>
  )
}

