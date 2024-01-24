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
import { usePathname, useRouter } from "next/navigation"
import { toast } from "../ui/use-toast"
import axios from "axios"

export default function TopMenu() {
  const {setTheme}  = useTheme()
  const pathName = usePathname()
  const router = useRouter()

  const logoutHandler = async () => {
    try {
      const data = await axios.get("/api/users/logout")
      router.push("/auth")

    } catch (err:any) {
      console.log(err)
      return toast({variant: "destructive", title: "Error Occurred"})
    }
  }

  return (
  <>
    {pathName !== "/auth" ? 
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger onClick={logoutHandler} >Log Out</MenubarTrigger>
      </MenubarMenu>
    </Menubar> : <></>}</>
  )
}

