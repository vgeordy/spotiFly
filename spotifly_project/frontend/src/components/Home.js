import { Typography } from "@mui/material";
import React from "react";
import Box from '@mui/material/Box'
import LeftDrawer from "./LeftDrawer";

const Home = () => {
  const homeText = "this is the home-page, and requires the user to be logged in";
  return (
    <div className="home-container">
      <div className="header">
      <Typography variant="h2">
        Spotifly
        </Typography>
      </div>
      <LeftDrawer />
      <Box sx={{position: "absolute", bottom: 0, right: 0, height: "90%", width: "87.5%"}}>
        {homeText}
      </Box>
    </div>
  );
};

export default Home;
