import { Avatar, Button } from "@mui/material"
import { useSession, signIn, signOut } from "next-auth/react"


 const Login=() =>{
  const { data: session } = useSession()

  if(session) {
    return (
    <>
      {/* Signed in as {session.user?.email} <br/> */}
      <Button color="error" onClick={() => signOut()}>Sign out</Button>
    </>
    )
  }
  return (
  <>
    <Button variant="contained" color="success"  onClick={() => signIn()}>Sign in</Button>
  </>
  )
}

export default Login