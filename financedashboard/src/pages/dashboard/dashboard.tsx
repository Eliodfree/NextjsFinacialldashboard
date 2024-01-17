import React from 'react'
import { Box,Grid,Paper } from '@mui/material'
import scss from "./dashboard.module.scss"
import DataRibbon from '@/components/Dashboard/DataRibbon'

const dashboard = () => {
  return (
    <Box className={scss.topCardsContainer} >

    <DataRibbon/>
    
    </Box>
  )
}

export default dashboard