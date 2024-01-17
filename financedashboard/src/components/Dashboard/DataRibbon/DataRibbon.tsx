import React from 'react'
import { Grid ,IconButton,Paper,} from '@mui/material'
import {Typography} from '@mui/material'
import {Tooltip} from '@mui/material'
import { InfoOutlined } from '@mui/icons-material'
import DataCard from '../DataCard'

const DataRibbon = () => {
  return (
    <Grid container gap={2}>
      <Grid>
      <DataCard 
       title={"Total Sales"}
       value={"462"}
       description={"the total sales of paceforwarders "}
      />
      </Grid>
      <Grid>
      <DataCard
       title={"Total value"}
       value={"$66462"}
       description={"the total sales of paceforwarders "}
      />
      </Grid>
      <Grid>
        <DataCard
         title={"Avg  value"}
         value={"$76475"}
         description={"the total values of paceforwarders "}
        />
      </Grid>
      <Grid>
      <DataCard
         title={"organise value"}
         value={"$555"}
         description={"the total values of paceforwarders "}
        />

      </Grid>
    </Grid>
  )
}

export default DataRibbon