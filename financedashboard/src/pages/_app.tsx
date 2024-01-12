import * as React from 'react';
import type { AppProps } from 'next/app'
import {Box} from "@mui/material"
import { SessionProvider } from "next-auth/react"
import { CssBaseline } from '@mui/material';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Header from './components/Headers/Header';

interface MyAppProps extends AppProps {
  session: any; // Adjust the type according to your session object structure
}



export default function App({ Component, pageProps: { session, ...pageProps } }: MyAppProps) {
  const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
  //togoling color mode
    const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
    //colormode
    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
    );
  
    const theme = React.useMemo(
      () =>
        createTheme({
          palette: {
            mode,
          },
        }),
      [mode],
    );
   
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <SessionProvider session={session}>
      <CssBaseline/>
      {/* <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'yellow',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box> */}
   <Header ColorModeContext={ColorModeContext}/>
      <Component {...pageProps} />
    </SessionProvider>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}