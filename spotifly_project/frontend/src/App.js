import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About";

import Home from "./components/Home";
import Login from "./components/Login";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1DB954',
        contrastText: '#fff'
      },
      secondary: {
        main: purple[500]
      },
      background: {
        default: '#363636'
      },
      text: {
        primary: '#fff',
        secondary: '#969696'
      },
    },
    components: {
      MuiDivider: {
        styleOverrides: {
          root: {
            color: "#fff",
            backgroundColor: "#fff",
            borderBottomWidth: "2px",
          }
        }
      },

    }
  })
  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/' element={<Home/>} />
      </Routes>
      </ThemeProvider>
      </div>
  );
};

export default App;
