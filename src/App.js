import React from "react";
import AppStyles from "./App.styles";
import Weather from "./components/Weather/Weather";
import WbSunnySharpIcon from "@material-ui/icons/WbSunnySharp";

import "typeface-roboto";
import { Typography, Box, AppBar, Toolbar } from "@material-ui/core";

function App() {
  const classes = AppStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} component="div" gutterBottom>
            <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">
              <WbSunnySharpIcon /> SOLAR WEATHER
            </Box>
            <Box fontWeight="fontWeightBold" fontSize="h6.fontSize">
              What's It Like Out There?
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>

      <Typography component="div" gutterBottom>
        <Weather />
      </Typography>
    </div>
  );
}

export default App;
