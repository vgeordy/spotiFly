import { Slide, Container, Typography, Button, Fade } from "@mui/material";
import React, { useState } from "react";
import Box from '@mui/material/Box'
import LeftDrawer from "./LeftDrawer";

const Home = () => {
  const homeText = "this is the home-page, and requires the user to be logged in";
  const [filter, setFilter] = useState('')
  const [playList, setPlaylist] = useState('')
  return (
    <div className="home-container">
      <div className="header">
      <Typography variant="h2">
        Spotifly
        </Typography>
      </div>
      
      <Fade in={playList !== ''}>
        <div>
          <LeftDrawer filter={filter} setFilter={setFilter} />
          </div>
        </Fade>
      
      <Box sx={{position: "absolute", bottom: 0, right: 0, height: "90%", width: "100%"}}>
        <Container sx={{paddingLeft: "auto", paddingRight: "auto", backgroundColor: "aqua", height: "80%"}}>
          <Button onClick={() => setPlaylist('Rock')}> Select PlayList</Button>
        </Container>
        
        <Box sx={{width: "100%", overflow: "hidden", height: "20%", position: 'absolute', bottom: 0, marginRight: "auto", marginLeft: "auto"}}>
        <Slide direction="up" in={filter !== ''}>
            <div style={{ width: "90%", height: "100%", backgroundColor: 'green' }}>ActiveFilter: {filter}</div>
        </Slide>
        </Box>
      </Box>

    </div>
  );
};

export default Home;
