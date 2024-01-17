import React from 'react'
import { Box } from '@mui/material'
import { useSession } from 'next-auth/react'
import Login from '../Login'


const signin = () => {
    const {data:session}=useSession();
    return (
    <Box
    sx={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    }}
    >
            <h2>{session ?"thanks for login":"plesse log in"}</h2>
            <Login/>
    </Box>
  )
}

export default signin