import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import logo from "../../logo.svg";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  logo: {
    height: "40px",
    marginRight: "20px"
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img src={logo} className={classes.logo} alt="logo" />
          <Typography variant="h5" className={classes.title}>
            ChuckNorris-API
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
