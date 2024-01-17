import { useTheme } from '@emotion/react'
import React from 'react'
import { Grid,Paper,Card } from '@mui/material'
import scss from "./Transactionsperday.module.scss"

export type TransactionsCardType={
 title:string,
 value:string,
 changevalue:string
}
export type TransactionsPerday={
    data ?:TransactionsCardType
}

const Transactionsperday = (props:TransactionsPerday) => {
    const {data}=props;
    const theme=useTheme();
  return (
    <Grid container gap={2} className={scss.wrapper}>Transactionsperday</Grid>
  )
}

export default Transactionsperday