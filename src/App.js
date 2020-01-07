import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import styles from "./box-layout.styles";

let nums = Array.from(Array(5).keys());
let nums1 = Array.from(Array(12).keys());
let elem = ["A", "B", "C", "D", "E"];

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.layout_root}>
        <div className={classes.ratingContainer}>
          {nums1.map(n1 => {
            return (
              <Grid
                key={n1}
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={1}
                className={classes.RemoveMargin}
              >
                {nums.map(n => {
                  if (
                    (elem[n] === "B" || elem[n] === "C") &&
                    (n1 >= 0 && n1 <= 6)
                  ) {
                    if (elem[n] === "B") {
                      return (
                        <Grid
                          id={elem[n] + "" + (n1 + 1)}
                          key={n}
                          item
                          xs={3}
                        />
                      );
                    } else {
                      return (
                        <Grid
                          id={elem[n] + "" + (n1 + 1)}
                          key={n}
                          item
                          xs={2}
                        />
                      );
                    }
                  } else {
                    if (elem[n] === "A" || elem[n] === "B") {
                      let BinKey = elem[n] + (n1 + 1);
                      return (
                        <Grid
                          className={classes.kioskDoor}
                          key={BinKey}
                          item
                          xs={3}
                        >
                          <Paper
                            id={elem[n] + "" + (n1 + 1)}
                            className={classes.gridback}
                          >
                            {elem[n] + " " + (n1 + 1)}
                          </Paper>
                        </Grid>
                      );
                    } else {
                      let BinKey = elem[n] + (n1 + 1);
                      return (
                        <Grid
                          className={classes.kioskDoor}
                          key={BinKey}
                          item
                          xs={2}
                        >
                          <Paper
                            id={elem[n] + "" + (n1 + 1)}
                            className={classes.gridback}
                          >
                            {elem[n] + " " + (n1 + 1)}
                          </Paper>
                        </Grid>
                      );
                    }
                  }
                })}
              </Grid>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
