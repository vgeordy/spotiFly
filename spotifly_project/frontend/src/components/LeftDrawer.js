import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Collapse } from '@mui/material';





export default function LeftDrawer({filter, setFilter}) {
  const [open, setOpen] = useState('')
  const drawerWidth = "12.5%"
  const options = {
    "One": ["One-One", "One-Two", "One-Three"],
    "Two": ["Two-One", "Two-Two"],
    "Three": ["Three-One"]
  }

  const handleClick = (newOpen) => {
    //e.preventDefault()
    if (open === newOpen) setOpen('')
    else setOpen(newOpen)
  }
  return (
    <Box sx={{ display: 'flex', backgroundColor: "red" }}>
      <CssBaseline />
      
      <Drawer sx={{
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 200,
          top: "6rem",
          boxSizing: 'border-box',
          backgroundColor: "transparent",
        },
        
      }} variant="permanent" anchor='left' >
        <Typography align='center' variant="h4">Filters</Typography>
        <List>
          {Object.keys(options).map(key => (
              <List>
              <ListItemButton dense divider={true} onClick={() => handleClick( key )} key={key}>
                <ListItemText primaryTypographyProps={{sx: {fontSize: 24}}} inset primary={key} />
                {open === key ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open === key} timeout="auto" unmountOnExit>
                <List component="div">
                  {options[key].map((item, index) => (
                    <ListItemButton onClick={() => setFilter(item) }sx={{borderTop: "1px dotted white"}}key={item}>
                      <ListItemText primary={item} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
              <Divider />
            </List>
          ))
        }
      </List>
      </Drawer>
    </Box>
  )
}