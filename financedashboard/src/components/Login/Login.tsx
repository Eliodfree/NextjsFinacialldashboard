import { Avatar, Button } from "@mui/material"
import { useSession, signIn, signOut } from "next-auth/react"
import Box from '@mui/material/Box';


export default function Component() {
  const { data: session } = useSession()
  if(session) {
    const avatarSrc = session.user?.image ?? undefined;

    return <>
      Signed in as {session.user?.email} <br/>
      <Button color="error" onClick={() => signOut()}>Sign out</Button>
    </>
  }
  return <>
    Please Login <br/>
    <Button variant="contained" color="success"  onClick={() => signIn()}>Sign in</Button>
  </>
}