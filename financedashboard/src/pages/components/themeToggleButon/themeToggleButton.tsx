import * as React from 'react';
import { Typography, useMediaQuery } from '@mui/material'
import { Theme } from '@mui/material';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import IconButton from '@mui/material/IconButton';


const ThemeToggleButton = () => {
    const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
    const mobileCheck=useMediaQuery("(min-width:500px)")
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

  return (
    <>
    {mobileCheck&&(
        <Typography>{theme.palette.mode}</Typography>
    )}
     <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </>
  )
}

export default ThemeToggleButton