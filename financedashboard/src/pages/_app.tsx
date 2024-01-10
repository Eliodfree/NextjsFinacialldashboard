import * as React from 'react';
import type { AppProps } from 'next/app'
import {Box} from "@mui/material"
import { SessionProvider } from "next-auth/react"
import { CssBaseline } from '@mui/material';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/material/IconButton';
import Brightness7Icon from '@mui/material/IconButton';

interface MyAppProps extends AppProps {
  session: any; // Adjust the type according to your session object structure
}

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function App({ Component, pageProps: { session, ...pageProps } }: MyAppProps) {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  //togoling color mode
   const ToggleColorMode=()=> {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
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
   }
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
    <SessionProvider session={session}>
      <CssBaseline/>
      <Box
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
    </Box>
      <Component {...pageProps} />
    </SessionProvider>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}