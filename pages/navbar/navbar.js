import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from 'next/image';

const drawerWidth = 240;
const navItems = ['Home', 'Services', 'About Us', 'Contact Us'];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar style={{ backgroundColor: '#0a0a0b', display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Link href="/">
  <div style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
    <Image src="/icon.png" alt="Tpbazar Logo" style={{ marginRight: '8px', width: '50px' }} width={60} height={20} />
  </div>
</Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {navItems.map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} style={{ textDecoration: 'none'}}>
                <div style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>
                  {item}
                </div>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;


// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Link from 'next/link';

// const drawerWidth = 240;
// const navItems = ['Home', 'Services', 'About Us', 'Contact Us'];

// function Navbar(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         MUI
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: 'center' }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar component="nav">
//       <Toolbar style={{ backgroundColor: '#0a0a0b', display: 'flex', justifyContent: 'space-between' }}>
//   <Box sx={{ display: 'flex', alignItems: 'center' }}>
//     <IconButton
//       color="inherit"
//       aria-label="open drawer"
//       edge="start"
//       onClick={handleDrawerToggle}
//       sx={{ mr: 2, display: { sm: 'none' } }}
//     >
//       <MenuIcon />
//     </IconButton>
//     <Link href="/">
//       <div style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
//         <img src="icon.png" alt="Tpbazar Logo" style={{ marginRight: '8px', width: '50px' }} />
//       </div>
//     </Link>
//   </Box>
//   <Box sx={{ display: 'flex', alignItems: 'center' }}>
//     {navItems.map((item) => (
//       <Link key={item} href={`/${item.toLowerCase()}`}>
//         <div style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>
//           {item}
//         </div>
//       </Link>
//     ))}
//   </Box>
// </Toolbar>

//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </Box>
//   );
// }

// Navbar.propTypes = {
//   window: PropTypes.func,
// };

// export default Navbar;


// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Link from 'next/link';

// const drawerWidth = 240;
// const navItems = ['Home', 'Services', 'About Us', 'Contact Us'];

// function Navbar(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         MUI
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: 'center' }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar component="nav">
//         <Toolbar style={{ backgroundColor: '#0a0a0b' }}>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             <Link href="/">
//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <img src="icon.png" alt="Tpbazar Logo" style={{ marginRight: '8px', width: '50px' }} />
//               </div>
//             </Link>
//           </Typography>
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             {navItems.map((item) => (
//               <Link key={item} href={`/${item.toLowerCase()}`}>
//                 <div>
//                   <Button sx={{ color: '#fff' }}>{item}</Button>
//                 </div>
//               </Link>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </Box>
//   );
// }

// Navbar.propTypes = {
//   window: PropTypes.func,
// };

// export default Navbar;


// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Link from 'next/link';

// const drawerWidth = 240;
// const navItems = ['Home','Services', 'About Us', 'Contact Us'];
// function navbar(props) {
//     const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         MUI
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: 'center' }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return ( 

//     <Box sx={{ display: 'flex' }}>
//     <CssBaseline />
//     <AppBar component="nav">
//       <Toolbar style={{ backgroundColor: '#0a0a0b'}}>
//         <IconButton
//           color="inherit"
//           aria-label="open drawer"
//           edge="start"
//           onClick={handleDrawerToggle}
//           sx={{ mr: 2, display: { sm: 'none' } }}
//         >
//           <MenuIcon />
//         </IconButton>
//         <Typography
//           variant="h6"
//           component="div"
//           sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//         >
//                    <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
//   <img src="icon.png" alt="Tpbazar Logo" style={{ marginRight: '8px' , width: '50px' }} />

// </Link>

//         </Typography>
//         <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//           {navItems.map((item) => (
//             <Button key={item} sx={{ color: '#fff' }}>
//               {item}
//             </Button>
//           ))}
//         </Box>
//       </Toolbar>
//     </AppBar>
//     <nav>
//       <Drawer
//         container={container}
//         variant="temporary"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{
//           keepMounted: true, // Better open performance on mobile.
//         }}
//         sx={{
//           display: { xs: 'block', sm: 'none' },
//           '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//         }}
//       >
//         {drawer}
//       </Drawer>
//     </nav>
//     {/* <Box component="main" sx={{ p: 3 }}>
//       <Toolbar />
//       <Typography>
//         Dashboard
//       </Typography>
//     </Box> */}
//   </Box>
//   ) 
// } 
 
// export default navbar