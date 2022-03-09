import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import HelpIcon from '@mui/icons-material/Help';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import {BsSpotify} from 'react-icons/bs'
//import ".//Login.css" 

const Login = () => {

  const longText = 'Audio Features include Mood: Danceability, Valence, Energy, Tempo\nProperties: Loudness, Speechiness, Instrumentalness\nContext: Liveness, Acousticness\nSegments, Tatums, Bars, Beats, Pitches, Timbre, and more'

  const auth = {
    url: 'auth'
  }

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={38}>
        <Grid
          item
          xs={12}
          component="div">
          <Typography variant="h2">
            Sort Your Spotify Playlist By Audio Features.
            {
              <Tooltip title={longText} >
                <IconButton color="secondary">
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            }
          </Typography>
        </Grid>
        <Grid item xs={12} component="div">
          <BsSpotify className="animated-spotify-icon" />
        </Grid>
        <Grid item xs={12}>
          <Button className="account-button"size="large" href={auth.url} variant="contained" color="primary" endIcon={<LoginIcon />}>Spotify Login</Button>
        </Grid>
      </Grid>
    </>

  );
};


export default Login;
