"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import axios from "axios"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function App() {
  const router = useRouter()
  const [show, setShow] = useState(false)
  const [user, setUser] = useState({email: "", password: "", confirm: ""})
  const [loading, setLoading] = useState(false)

  const signupHandler = async () => {
    try {
      setLoading(true)
      if (user.email.length <= 0 || user.password.length <= 0 || user.confirm.length <= 0 ) {
        return toast({variant: "destructive", title: "Enter all fields"})
      } else if (user.password !== user.confirm) {
        return toast({variant: "destructive", title: "Passwords don't match"})
      }

      const {data} = await axios.post("/api/users/signup", user)

      if (!data.success) {
        return toast({title: data.message})
      }

      toast({title: "User Created", description: "Please log in"})

    } catch (err:any) {
      toast({title: "Error occurred", variant: "destructive"}) 
    } finally {
      setLoading(false)
      setUser({email: "", password: "", confirm: ""})
    }
  }

  const loginHandler = async () => {
    try {
      setLoading(true)
      if (user.email.length <=0 || user.password.length <= 0) {
        return toast({variant: "destructive", title: "Enter all fields"})
      }

      const {data} = await axios.post("/api/users/login", user)

      if (!data.success) {
        return toast({variant: "destructive", title: data.message})
      }

      console.log(data)

      toast({title: "Logged in successfully"})

      router.push("/profile")
    } catch (err:any) {
      toast({title: "Error occurred", variant: "destructive"})
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-screen min-h-screen flex items-center justify-center">
      <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Sign Up</TabsTrigger>
        <TabsTrigger value="password">Login</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
                Create an account to access the simple task management app
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Email</Label>
              <Input type="email" placeholder="johndoe@gmail.com" onChange={e => setUser({...user, email: e.target.value})} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Password</Label>
              <Input id="pass" type={!show ? "password": "text"} placeholder="Enter Your Password" onChange={e => setUser({...user, password: e.target.value})}  />
            </div>
            <span className="text-xs cursor-pointer mt-2" onClick={() => setShow(!show)}  >{!show ? "Show Password" : "Hide Password"}</span>

            <div className="space-y-1">
              <Label htmlFor="username">Confirm Password</Label>
              <Input id="pass" type={"password"} placeholder="Enter Your Password" onChange={e => setUser({...user, confirm: e.target.value})} />
            </div>

          </CardContent>
          <CardFooter>
              {loading ? <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Signing Up
    </Button> :  
            <Button onClick={signupHandler} >Sign Up</Button>
    }
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Log In to your account to access the tasks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input type="email" placeholder="johndoe@gmail.com" onChange={e => setUser({...user, email:e.target.value})} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="passwd">Password</Label>
              <Input id="passw" type={!show ? "password": "text"} placeholder="Enter Your Password" onChange={e => setUser({...user, password: e.target.value})}  />
            </div>
            <p>{!show ? "Show Password" : "Hide Password"}</p>
          </CardContent>
          <CardFooter>
              {loading ? <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Logging In
    </Button> :
            <Button onClick={loginHandler} >Log In</Button>}
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
  )
}
