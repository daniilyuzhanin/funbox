import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { PropsWithChildren } from 'react';

const useStyles = makeStyles({});

export const Layout = ({ children }: PropsWithChildren<{}>) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item>Ты сегодня покормил кота?</Grid>
      <Grid container>
        Card container
      </Grid>
    </Grid>
  );
};
