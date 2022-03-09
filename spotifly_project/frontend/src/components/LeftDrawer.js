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



const drawerWidth = "12.5%"

export default function LeftDrawer() {
  const [open, setOpen] = useState({"mood": false, "properties": false, "context": false})

const handleClick = (e) => {
  e.preventDefault();
setOpen({ ...open, [e.target.id] : !open[e.target.id] });
}
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          backgroundColor: '#191414',
          '& .MuiDrawer-paper': {
            marginTop: "4.5%",
            height: "100%",
            backgroundColor: '#363636',
            width: drawerWidth,
            boxSizing: 'border-box',
            borderRight: "2px solid #1DB954",
            
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography sx={{ marginTop: "2rem" }} align='center' variant='h4' noWrap component="div">Filters</Typography>
        <Divider />
        <List>
          <ListItemButton id="mood" onClick={e => {handleClick(e)}}>
            <ListItemText primaryTypographyProps={{fontSize: "1.5rem"}} inset primary="Mood" />
              {open['mood'] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open['mood']} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Danceablility" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Valence" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Tempo" />
              </ListItemButton>
            </List>
          </Collapse>
           <ListItemButton id="properties" onClick={e => {handleClick(e)}}>
            <ListItemText primaryTypographyProps={{fontSize: "1.5rem"}} inset primary="Properties" />
              {open['properties'] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open['properties']} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Loudness" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Speechiness" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Instrumentalness" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton id="context" onClick={e => {handleClick(e)}}>
            <ListItemText primaryTypographyProps={{fontSize: "1.5rem"}} inset primary="Context" />
              {open['context'] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open['context']} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Liveness" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Acousticness" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Segments" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Tatums" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Bars" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Beats" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Pitches" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Timbre" />
              </ListItemButton>
            </List>
          </Collapse>
          
        </List>
        <Divider />
      </Drawer>
    </Box>
  )
}