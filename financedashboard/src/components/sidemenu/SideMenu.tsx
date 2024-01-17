import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import scss from "./Sidemenu.module.scss"
import { useMediaQuery } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';
import { signOut } from 'next-auth/react';


const menuRouteList=["data","profile","settings",""]
const menuListTranslations=["Data","Profile","Settings"]
const menuListIcon=[
<HomeIcon/>,
<PersonIcon/>,
<ManageAccountsIcon/>,
<ExitToAppIcon/>,

]

const drawerWidth = 240;
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const sideMenu = () => {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const mobileCheck=useMediaQuery("(min-width:600px)");

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleListItemButtonClick=(text:string)=>{
    text=="Sign Out" ?signOut:setOpen(false);
    setOpen(false);
  }

  return (
    <Drawer variant="permanent" open={open} 
    // className="scss.sideMenu"
     sx={{
      width: drawerWidth,
    boxSizing: 'border-box',
    ['& .MuiDrawer-paper']:{
      top:mobileCheck ? 78:57,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    },
   
    
    }}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerToggle}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuListTranslations.map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              {/* linking nextjs pages */}
             <Link className={scss.link} href={`/dashboard/${menuRouteList[index]}`}>
             <ListItemButton
               onClick={()=>handleListItemButtonClick(text)}
                title={text}
                aria-label={text}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {menuListIcon[index]}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ 
                  color:theme.palette.text.primary,
                  opacity: open ? 1 : 0 }} />
              </ListItemButton>
             </Link>
           
            </ListItem>
          ))}
        </List>
      </Drawer>
  )
}

export default sideMenu