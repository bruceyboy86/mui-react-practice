import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

export default function FullWidthGrid() {
  const theme = useTheme();
  // console.log({theme})
  return (
    <>
    <div className={theme.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={theme.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={theme.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={theme.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={theme.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={theme.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={theme.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={theme.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
    <Button className={theme.props.button}>Hook</Button>
    <h3 className={theme.props.h3}>testing h3</h3>
    </>
  );
}
