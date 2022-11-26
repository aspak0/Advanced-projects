import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcons from "@material-ui/icons/Search";

import useStyles from "./HeaderStyle";

const Header = () => {

  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className={classes.title}>
            Travel-Adviser
          </Typography>
          <Box display="flex">
            <Typography variant="h6" className={classes.title}>
              Explore new places
            </Typography>
            {/* <Autocomplete> */}
              <div className={classes.search}>
                <div className={classes.searchIcons}>
                  <SearchIcons />
                </div>
                <InputBase
                  placeholder="Search..."
                  className={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>
            {/* </Autocomplete> */}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
