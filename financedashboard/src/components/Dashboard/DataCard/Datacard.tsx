import React from 'react'
import { Grid ,IconButton,Paper,} from '@mui/material'
import {Typography} from '@mui/material'
import {Tooltip} from '@mui/material'
import { InfoOutlined } from '@mui/icons-material'
import scss from "./datacard.module.scss"

export type DataCardProps={
  title:string,
  value:string,
  description:string,
}

const Datacard = (props:DataCardProps) => {
  const {title,value,description}=props
  return (
    <Paper 
    className={scss.dataCard}
    sx={{padding:"1rem" ,height:100,background:"yellow"}}
    >
  <div
  className={scss.header}
   style={{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    background:"green"
  }}
  >
<Typography>
{title}
</Typography>
<Tooltip
title={
  <Typography>
    The total sales of datasoft
    {`${description} which is ${value}`}
  </Typography>
}
>
<IconButton>
  <InfoOutlined/>
</IconButton>

</Tooltip>
  </div>
 <Typography
fontSize="h4"
>
{value}
 </Typography>
    </Paper>
  )
}

export default Datacard