import React from 'react'
import { Box,Grid,Paper } from '@mui/material'
import scss from "./dashboard.module.scss"

const dashboard = () => {
  return (
    <Box>
      <Grid container spacing={2} className={scss.topCardsContainer}>
  <Grid item xs={8}>
    <Paper className={scss.dataCard}>xs=8</Paper>
  </Grid>
  <Grid item xs={4}>
    <Paper className={scss.dataCard}>xs=4</Paper>
  </Grid>
  <Grid item xs={4}>
    <Paper className={scss.dataCard}>xs=4</Paper>
  </Grid>
  <Grid item xs={8}>
    <Paper className={scss.dataCard}>xs=8</Paper>
  </Grid>
    </Grid>
   <Grid marginY={2}>
      <Paper className={scss.dataCard}>xs-8</Paper>
   </Grid>
    </Box>
  )
}

export default dashboard